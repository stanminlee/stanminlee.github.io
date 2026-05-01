"use client";

import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useScramble, useCounter } from "@/lib/hooks";
import {
  ContribDay,
  GitHubEvent,
  YearOption,
  YEAR_OPTIONS,
  LEVEL_COLORS,
  MONTHS_SHORT,
  MONTHS_INITIAL,
  GH_USER,
  CONTRIB_API,
  EVENTS_API,
  buildWeeks,
  monthLabelPositions,
  monthlyTotals,
  eventsInRange,
  dateOnly,
} from "@/lib/contrib";

/* ── Year selector ──────────────────────────────────────────── */

function YearSelector({ value, onChange }: { value: YearOption; onChange: (y: YearOption) => void }) {
  return (
    <div className="year-tabs">
      {YEAR_OPTIONS.map((y) => (
        <button
          key={y}
          className={`year-tab${y === value ? " active" : ""}`}
          onClick={() => onChange(y)}
        >
          {y === "last" ? "Last 12 months" : y}
        </button>
      ))}
    </div>
  );
}

/* ── Summary stats ──────────────────────────────────────────── */

function SummaryItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="contrib-summary-item">
      <span className="contrib-summary-num">{num}</span>
      <span className="contrib-summary-label">{label}</span>
    </div>
  );
}

function Summary({ days, year }: { days: ContribDay[]; year: YearOption }) {
  const total = days.reduce((s, d) => s + d.count, 0);
  const activeDays = days.filter((d) => d.count > 0).length;
  const best = days.reduce((b, d) => (d.count > b.count ? d : b), { count: 0 } as ContribDay);
  const avgActive = activeDays ? total / activeDays : 0;

  const totalAnim = useCounter(total, true, 0);
  const activeAnim = useCounter(activeDays, true, 80);
  const bestAnim = useCounter(best.count, true, 160);
  const avgAnim = useCounter(avgActive, true, 240);

  const totalLabel = year === "last" ? "past year" : `in ${year}`;

  return (
    <div className="contrib-summary">
      <SummaryItem num={Math.round(totalAnim).toLocaleString()} label={totalLabel} />
      <SummaryItem num={Math.round(activeAnim).toLocaleString()} label="active days" />
      <SummaryItem num={Math.round(bestAnim).toLocaleString()} label="best day" />
      <SummaryItem num={avgAnim.toFixed(1)} label="avg / active" />
    </div>
  );
}

/* ── Heatmap grid ───────────────────────────────────────────── */

function Grid({ days, year }: { days: ContribDay[]; year: YearOption }) {
  const weeks = useMemo(() => buildWeeks(days), [days]);
  const months = useMemo(() => monthLabelPositions(weeks), [weeks]);
  const colTemplate = `repeat(${weeks.length}, 1fr)`;
  const todayStr = dateOnly(new Date());

  return (
    <div className="contrib-graph" key={year}>
      <div className="contrib-months" style={{ gridTemplateColumns: colTemplate }}>
        {months.map((m) => (
          <span key={m.label + m.col} className="contrib-month-label" style={{ gridColumn: m.col + 1 }}>
            {m.label}
          </span>
        ))}
      </div>
      <div
        className="contrib-grid"
        style={{ gridTemplateColumns: colTemplate, aspectRatio: `${weeks.length} / 7` }}
      >
        {weeks.map((week, wi) =>
          week.map((day, di) => (
            <div
              key={`${wi}-${di}`}
              className={`contrib-cell${day?.date === todayStr ? " contrib-cell--today" : ""}`}
              style={{
                backgroundColor: day ? LEVEL_COLORS[day.level] : "transparent",
                animationDelay: `${wi * 8}ms`,
              }}
              title={day ? `${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}` : ""}
            />
          ))
        )}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="contrib-legend">
      <span className="contrib-legend-label">Less</span>
      {LEVEL_COLORS.map((c, i) => (
        <div key={i} className="contrib-cell contrib-cell--legend" style={{ backgroundColor: c }} />
      ))}
      <span className="contrib-legend-label">More</span>
    </div>
  );
}

/* ── Monthly totals ─────────────────────────────────────────── */

function MonthlyChart({ days, year }: { days: ContribDay[]; year: YearOption }) {
  const totals = useMemo(() => monthlyTotals(days), [days]);
  const max = Math.max(...totals, 1);

  return (
    <div className="monthly-wrap">
      <h3 className="contrib-subheading">Contributions by Month</h3>
      <div className="monthly-chart" key={year}>
        {totals.map((total, i) => (
          <div key={i} className="monthly-col">
            <div className="monthly-bar-track">
              <div
                className="monthly-bar"
                style={{
                  height: `${(total / max) * 100}%`,
                  animationDelay: `${i * 50}ms`,
                }}
                title={`${MONTHS_SHORT[i]}: ${total.toLocaleString()} contributions`}
              />
            </div>
            <span className="monthly-label">{MONTHS_INITIAL[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Top repositories ───────────────────────────────────────── */

function TopRepos({ events, days, year }: { events: GitHubEvent[]; days: ContribDay[]; year: YearOption }) {
  const { topPublic, privateContribs } = useMemo(() => {
    const start = days[0]?.date ?? "";
    const end = days[days.length - 1]?.date ?? "";
    const filtered = eventsInRange(events, start, end);

    const counts = new Map<string, number>();
    const eventDays = new Set<string>();
    for (const e of filtered) {
      counts.set(e.repo.name, (counts.get(e.repo.name) ?? 0) + 1);
      eventDays.add(e.created_at.split("T")[0]);
    }
    const topPublic = Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    const privateContribs = days.reduce((sum, d) => {
      if (d.count > 0 && !eventDays.has(d.date)) return sum + d.count;
      return sum;
    }, 0);
    return { topPublic, privateContribs };
  }, [events, days]);

  if (topPublic.length === 0 && privateContribs === 0) return null;

  return (
    <div className="top-repos-wrap" key={year}>
      <h3 className="contrib-subheading">Top Repositories</h3>
      <div className="top-repos-list">
        {topPublic.map((r, i) => {
          const short = r.name.replace(new RegExp(`^${GH_USER}/`), "");
          return (
            <a
              key={r.name}
              href={`https://github.com/${r.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="top-repo-row"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="top-repo-rank">{String(i + 1).padStart(2, "0")}</span>
              <span className="top-repo-name">{short}</span>
              <span className="top-repo-count">
                {r.count} {r.count === 1 ? "interaction" : "interactions"}
              </span>
            </a>
          );
        })}
        {privateContribs > 0 && (
          <div
            className="top-repo-row top-repo-row--private"
            style={{ animationDelay: `${topPublic.length * 60}ms` }}
          >
            <FontAwesomeIcon icon={faLock} className="top-repo-lock" />
            <span className="top-repo-name">Private repositories</span>
            <span className="top-repo-badge">private</span>
            <span className="top-repo-count">
              {privateContribs} {privateContribs === 1 ? "contribution" : "contributions"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main ──────────────────────────────────────────────────── */

export default function Contributions({ headerReady }: { headerReady: boolean }) {
  const [year, setYear] = useState<YearOption>("last");
  const [cache, setCache] = useState<Record<string, ContribDay[]>>({});
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<GitHubEvent[]>([]);

  const heading = useScramble("Contributions", headerReady, 400);
  const days = cache[year] ?? [];

  useEffect(() => {
    if (cache[year]) return;
    setLoading(true);
    fetch(CONTRIB_API(year))
      .then((r) => r.json())
      .then((data) => setCache((c) => ({ ...c, [year]: data.contributions ?? [] })))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [year, cache]);

  useEffect(() => {
    if (events.length > 0) return;
    fetch(EVENTS_API)
      .then((r) => r.json())
      .then((data) => setEvents(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, [events.length]);

  return (
    <section>
      <h2>{heading}</h2>
      <YearSelector value={year} onChange={setYear} />
      {loading && days.length === 0 && <p className="contrib-loading">Loading…</p>}
      {days.length > 0 && (
        <div className="contrib-wrap">
          <Summary days={days} year={year} />
          <Grid days={days} year={year} />
          <Legend />
          <MonthlyChart days={days} year={year} />
          <TopRepos events={events} days={days} year={year} />
        </div>
      )}
    </section>
  );
}

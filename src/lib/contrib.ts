export type ContribDay = { date: string; count: number; level: number };
export type GitHubEvent = { repo: { name: string }; public: boolean; created_at: string };
export type DayCell = ContribDay | null;

export const LEVEL_COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
export const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export const MONTHS_INITIAL = ["J","F","M","A","M","J","J","A","S","O","N","D"];

export const YEAR_OPTIONS = ["last", "2026", "2025", "2024"] as const;
export type YearOption = (typeof YEAR_OPTIONS)[number];

export const GH_USER = "stanminlee";
export const CONTRIB_API = (year: YearOption) =>
  `https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=${year}`;
export const EVENTS_API = `https://api.github.com/users/${GH_USER}/events?per_page=100`;

export const dateOnly = (d: Date) => d.toISOString().split("T")[0];

export function buildWeeks(days: ContribDay[]): DayCell[][] {
  if (days.length === 0) return [];
  const firstDow = new Date(days[0].date + "T00:00:00").getDay();
  const padded: DayCell[] = [...Array(firstDow).fill(null), ...days];
  const weeks: DayCell[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

export function monthLabelPositions(weeks: DayCell[][]) {
  const positions: { label: string; col: number }[] = [];
  weeks.forEach((week, wi) => {
    const first = week.find((d): d is ContribDay => d !== null);
    if (!first) return;
    const d = new Date(first.date + "T00:00:00");
    if (d.getDate() > 7) return;
    const label = MONTHS_SHORT[d.getMonth()];
    const last = positions[positions.length - 1];
    if (!last || last.label !== label) {
      positions.push({ label, col: wi });
    }
  });
  return positions;
}

export function monthlyTotals(days: ContribDay[]): number[] {
  const totals = Array<number>(12).fill(0);
  for (const d of days) {
    const m = new Date(d.date + "T00:00:00").getMonth();
    totals[m] += d.count;
  }
  return totals;
}

export function eventsInRange(events: GitHubEvent[], start: string, end: string): GitHubEvent[] {
  if (!start || !end) return events;
  return events.filter((e) => {
    const d = e.created_at.split("T")[0];
    return d >= start && d <= end;
  });
}

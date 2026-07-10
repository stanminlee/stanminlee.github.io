"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Contributions from "@/components/Contributions";
import { useScramble, useCounter } from "@/lib/hooks";

const experience = [
  {
    company: "Silimate (YC S23)",
    url: "https://www.silimate.com/",
    role: "Founding Engineer",
    dates: "Sep 2025 – Present",
    skills: ["Python", "C++", "Synthesis Tools", "AI Agents", "Machine Learning"],
    description:
      "Engineer #1 at hiring time. My key responsibilities include owning/driving core feature development and customer support, which include unicorn startups and Fortune 500s.",
  },
  {
    company: "Apple Inc.",
    url: "https://www.apple.com/",
    role: "CAD Intern, Top-level Physical Design",
    dates: "Jun 2025 – Sep 2025",
    skills: ["Python", "Tcl", "Physical Design", "Cadence Innovus"],
    description:
      "Developed analysis tool to identify areas for physical design flow improvements. Discovered inefficiencies in buffer placement/routing and developed supporting utilities for an algorithmic improvement. Delivered successful presentation to the senior director of CAD.",
  },
  {
    company: "Silimate (YC S23)",
    url: "https://www.silimate.com/",
    role: "Software Intern",
    dates: "Oct 2024 – May 2025",
    skills: ["TypeScript", "Python", "Pytest"],
    description:
      "First intern for the company. Architected the full testing suite for the first company product and developed multiple key full-stack features, which drove significant user growth and revenue with large companies.",
  },
  {
    company: "Stanford Department of Electrical Engineering",
    url: "https://rsg.stanford.edu/",
    role: "Research Intern, Robust Systems Group",
    dates: "Jun 2024 – Aug 2024",
    skills: ["Python"],
    description:
      "Presented research on next-generation augmented reality accelerators.",
  },
];

const FULL_NAME = "Stan Lee";
type View = "home" | "contributions";

export default function Site() {
  const [view, setView] = useState<View>("home");
  const [displayed, setDisplayed] = useState("");
  const [headerReady, setHeaderReady] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const expLabel = useScramble("Experience", headerReady, 400);

  const countExp = useCounter(experience.length, headerReady, 700);
  const countCompanies = useCounter(
    new Set(experience.map((e) => e.company)).size,
    headerReady,
    750
  );

  const runTypewriter = () => {
    setDisplayed("");
    setHeaderReady(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) {
        clearInterval(interval);
        setHeaderReady(true);
      }
    }, 80);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    return runTypewriter();
  }, []);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(120,119,198,0.07), transparent 70%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setScrollPct(isNaN(pct) ? 0 : pct * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} aria-hidden />
      <div ref={glowRef} className="cursor-glow" aria-hidden />
      <div className={`container${headerReady ? " loaded" : ""}`}>
        <header className="header">
          <div className="header-info">
            <h1 className="name-link" onClick={() => { setView("home"); runTypewriter(); }}>
              {displayed}
              <span className="cursor-blink" aria-hidden>|</span>
            </h1>
            <p className="subtitle stagger-2">
              Founding Engineer, Silimate (YC S23)
            </p>
            <div className="social stagger-3">
              <a href="https://www.linkedin.com/in/stanminlee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/stanminlee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:slee93@stanford.edu" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </header>

        <main>
          <nav className="page-nav stagger-4">
            <button
              className={`nav-link${view === "home" ? " active" : ""}`}
              onClick={() => setView("home")}
            >
              Home
            </button>
            <button
              className={`nav-link${view === "contributions" ? " active" : ""}`}
              onClick={() => setView("contributions")}
            >
              Contributions
            </button>
          </nav>

          <div key={view} className="view-fade">
            {view === "home" && (
              <>
                <section className="bio stagger-5">
                  <p>
                    I recently graduated from Stanford University with a Bachelor of Science in Electrical Engineering.
                    I&apos;ve previously worked in the Silicon Engineering Group at Apple.
                    Currently, I&apos;m a Founding Engineer at Silimate (YC S23).
                  </p>
                  <div className="stats stagger-5">
                    <span className="stat"><span className="stat-num">{Math.round(countExp)}</span> experiences</span>
                    <span className="stat-sep">·</span>
                    <span className="stat"><span className="stat-num">{Math.round(countCompanies)}</span> companies</span>
                  </div>
                </section>

                <section className="stagger-6">
                  <h2>{expLabel}</h2>
                  <div className="experience-list">
                    {experience.map((item, i) => (
                      <div
                        className={`experience-item${expandedExp === i ? " expanded" : ""}`}
                        key={i}
                        onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                      >
                        <div className="experience-header">
                          <div className="experience-title-row">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="company"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.company}
                            </a>
                            <p className="role">{item.role}</p>
                          </div>
                          <span className="date">
                            {item.dates}
                            <span className="experience-chevron" aria-hidden>›</span>
                          </span>
                        </div>
                        <p className="desc">{item.description}</p>
                        <div className="skills">
                          {item.skills.map((s) => (
                            <span key={s} className="skill-tag">{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {view === "contributions" && <Contributions headerReady={headerReady} />}
          </div>
        </main>
      </div>
    </>
  );
}

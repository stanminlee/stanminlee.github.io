"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useScramble, useCounter } from "@/lib/hooks";

const experience = [
  {
    company: "Silimate (YC S23)",
    url: "https://www.silimate.com/",
    role: "Founding Engineer",
    dates: "Sep 2025 – Present",
  },
  {
    company: "Apple Inc.",
    url: "https://www.apple.com/",
    role: "CAD Intern, Top-level Physical Design",
    dates: "Jun 2025 – Sep 2025",
  },
  {
    company: "Silimate (YC S23)",
    url: "https://www.silimate.com/",
    role: "Software Intern",
    dates: "Oct 2024 – May 2025",
  },
  {
    company: "Stanford Department of Electrical Engineering",
    url: "https://rsg.stanford.edu/",
    role: "Research Intern, Robust Systems Group",
    dates: "Jun 2024 – Aug 2024",
  },
];

const education = [
  {
    school: "Stanford University",
    url: "https://ee.stanford.edu/",
    degree: "M.S. Electrical Engineering",
    concentration: "Software and Hardware Systems",
    dates: "2025 – (On leave)",
  },
  {
    school: "Stanford University",
    url: "https://ee.stanford.edu/",
    degree: "B.S. Electrical Engineering",
    concentration: "Hardware and Software",
    dates: "2022 – 2026",
  },
];

const FULL_NAME = "Stan Lee";

export default function Site() {
  const [displayed, setDisplayed] = useState("");
  const [headerReady, setHeaderReady] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const glowRef = useRef<HTMLDivElement>(null);

  const expLabel = useScramble("Experience", headerReady, 400);
  const eduLabel = useScramble("Education", headerReady, 500);

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
      el.style.background = `radial-gradient(500px at ${e.clientX}px ${e.clientY}px, rgba(120,119,198,0.1), transparent 70%)`;
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
            <h1 className="name-link" onClick={runTypewriter}>
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
            </div>
          </div>
        </header>

        <main>
          <section className="bio stagger-4">
            <p>
              I recently graduated from Stanford with a B.S. in Electrical Engineering.
              My previous experience and education spans the chip design stack—from compilers to physical design.
              I&apos;m currently a Founding Engineer at Silimate (YC S23).
            </p>
            <div className="stats stagger-5">
              <span className="stat"><span className="stat-num">{Math.round(countExp)}</span> experiences</span>
              <span className="stat-sep">·</span>
              <span className="stat"><span className="stat-num">{Math.round(countCompanies)}</span> companies</span>
            </div>
          </section>

          <section className="stagger-5">
            <h2>{expLabel}</h2>
            <div className="experience-list">
              {experience.map((item, i) => (
                <div className="experience-item" key={i}>
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company"
                      >
                        {item.company}
                      </a>
                      <p className="role">{item.role}</p>
                    </div>
                    <span className="date">{item.dates}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="stagger-6 education-section">
            <h2>{eduLabel}</h2>
            <div className="experience-list">
              {education.map((item, i) => (
                <div className="experience-item education-item" key={i}>
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company"
                      >
                        {item.school}
                      </a>
                      <p className="role">{item.degree}</p>
                      <p className="role education-detail">{item.concentration}</p>
                    </div>
                    <span className="date">{item.dates}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

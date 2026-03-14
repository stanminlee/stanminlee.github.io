"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Project from "@/components/Project";

const experience = [
  {
    company: "Silimate (YC S23)",
    url: "https://www.silimate.com/",
    role: "Founding Engineer",
    dates: "Sep 2025 – Present",
    description:
      "Silimate is the copilot for chip designers. My key responsibilities include owning/driving core feature development and customer support, which include unicorn startups and Fortune 500s.",
  },
  {
    company: "Apple Inc.",
    url: "https://www.apple.com/",
    role: "CAD Intern, Top-level Physical Design",
    dates: "Jun 2025 – Sep 2025",
    description:
      "Performed analysis for potential physical design flow improvements and developed tooling to assist design teams.",
  },
  {
    company: "Silimate (YC S23)",
    url: "https://www.silimate.com/",
    role: "Software Intern",
    dates: "Oct 2024 – May 2025",
    description:
      "Architected the full testing suite for the first company product and developed multiple key full-stack features, which drove significant user growth and revenue with large companies.",
  },
  {
    company: "Stanford Department of Electrical Engineering",
    url: "https://rsg.stanford.edu/",
    role: "Research Intern, Robust Systems Group",
    dates: "Jun 2024 – Aug 2024",
    description:
      "Presented research on next-generation augmented reality accelerators after selection to the 2024 EE REU Program.",
  },
];

const projects = [
  {
    title: "Preqorsor",
    description: "Preqorsor is a fast RTL-level synthesis PPA prediction tool.",
    dates: "Oct 2024 – Present",
  },
];

const FULL_NAME = "Stan Lee";

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const glowRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Cursor glow
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(120,119,198,0.07), transparent 70%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden />
      <div className="container">
        <header className="header">
          <div className="header-info">
            <h1>
              {displayed}
              <span className="cursor-blink" aria-hidden>|</span>
            </h1>
            <p className="subtitle">
              Stanford University · M.S. & B.S. Candidate, Electrical Engineering
            </p>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/stanminlee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/stanminlee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:slee93@stanford.edu" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="bio">
            <p>
              I&apos;m a student at Stanford studying Electrical Engineering and interested
              in building powerful software tools. I was previously working in the Silicon Engineering Group at Apple
              doing Physical Design CAD. Currently, I&apos;m a Founding Engineer at Silimate (YC S23) building
              the future of chip design.
            </p>
          </section>

          <section>
            <h2>Experience</h2>
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
                  <p className="desc">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-list">
              {projects.map((p, i) => (
                <Project key={i} title={p.title} description={p.description} link={p.link} dates={p.dates} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

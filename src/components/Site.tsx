"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Project from "@/components/Project";

const experience = [
  {
    company: "Silimate (YC S23)",
    tooltip: "Full Time · Mountain View, CA",
    url: "https://www.silimate.com/",
    role: "Founding Engineer",
    dates: "Sep 2025 – Present",
    description:
      "Engineer #1 at hiring time. My key responsibilities include owning/driving core feature development and customer support, which include unicorn startups and Fortune 500s.",
  },
  {
    company: "Apple Inc.",
    tooltip: "Full Time · Sunnyvale, CA",
    url: "https://www.apple.com/",
    role: "CAD Intern, Top-level Physical Design",
    dates: "Jun 2025 – Sep 2025",
    description:
      "Performed analysis for potential physical design flow improvements and developed tooling to assist design teams.",
  },
  {
    company: "Silimate (YC S23)",
    tooltip: "Part Time · Mountain View, CA",
    url: "https://www.silimate.com/",
    role: "Software Intern",
    dates: "Oct 2024 – May 2025",
    description:
      "First intern for the company. Architected the full testing suite for the first company product and developed multiple key full-stack features, which drove significant user growth and revenue with large companies.",
  },
  {
    company: "Stanford Department of Electrical Engineering",
    tooltip: "Full Time · Stanford, CA",
    url: "https://rsg.stanford.edu/",
    role: "Research Intern, Robust Systems Group",
    dates: "Jun 2024 – Aug 2024",
    description:
      "Presented research on next-generation augmented reality accelerators.",
  },
];

const projects = [
  {
    title: "Preqorsor",
    description: "Preqorsor is a fast RTL-level synthesis PPA prediction tool.",
    dates: "Oct 2024 – Present",
    link: undefined as string | undefined,
  },
];

const posts = [
  {
    slug: "hello-world",
    title: "Welcome to my website!",
    date: "Mar 14, 2026",
    excerpt: "Introduction to my blog posts",
    content: `
      I've decided to start blogging about my experiences and learnings in the semiconductor industry. More to come soon...
    `.trim(),
  },
];

const FULL_NAME = "Stan Lee";
type View = "home" | "blog" | { slug: string };

export default function Site() {
  const [view, setView] = useState<View>("home");
  const [displayed, setDisplayed] = useState("");
  const [headerReady, setHeaderReady] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

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

  const currentPost =
    typeof view === "object" ? posts.find((p) => p.slug === view.slug) : null;
  const viewKey = typeof view === "object" ? view.slug : view;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden />
      <div className={`container${headerReady ? " loaded" : ""}`}>
        <header className="header">
          <div className="header-info">
            <h1 className="name-link" onClick={() => { setView("home"); runTypewriter(); }}>
              {displayed}
              <span className="cursor-blink" aria-hidden>|</span>
            </h1>
            <p className="subtitle stagger-2">
              Stanford University · M.S. & B.S. Candidate, Electrical Engineering
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
              className={`nav-link${view === "blog" || typeof view === "object" ? " active" : ""}`}
              onClick={() => setView("blog")}
            >
              Blog
            </button>
          </nav>

          {/* ── Home ── */}
          <div key={viewKey} className="view-fade">
          {view === "home" && (
            <>
              <section className="bio stagger-5">
                <p>
                  I&apos;m a student at Stanford studying Electrical Engineering and interested
                  in building powerful software tools. I was previously working in the Silicon Engineering Group at Apple
                  doing Physical Design CAD. Currently, I&apos;m a Founding Engineer at Silimate (YC S23) building
                  the future of chip design.
                </p>
              </section>

              <section className="stagger-6">
                <h2>Experience</h2>
                <div className="experience-list">
                  {experience.map((item, i) => (
                    <div className="experience-item" key={i}>
                      <div className="experience-header">
                        <div className="experience-title-row">
                          <div className="company-wrap">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="company">
                              {item.company}
                            </a>
                            <span className="company-tooltip">{item.tooltip}</span>
                          </div>
                          <p className="role">{item.role}</p>
                        </div>
                        <span className="date">{item.dates}</span>
                      </div>
                      <p className="desc">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="projects-section stagger-7">
                <h2>Projects</h2>
                <div className="project-list">
                  {projects.map((p, i) => (
                    <Project key={i} title={p.title} description={p.description} link={p.link} dates={p.dates} />
                  ))}
                </div>
              </section>
            </>
          )}

          {/* ── Blog index ── */}
          {view === "blog" && (
            <section>
              <h2>Blog</h2>
              <div className="experience-list">
                {posts.map((post) => (
                  <div
                    key={post.slug}
                    className="experience-item blog-row"
                    onClick={() => setView({ slug: post.slug })}
                  >
                    <div className="experience-header">
                      <span className="company">{post.title}</span>
                      <span className="date">{post.date}</span>
                    </div>
                    <p className="desc">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Blog post ── */}
          {currentPost && (
            <article className="post">
              <div className="post-header">
                <h1 className="post-title">{currentPost.title}</h1>
                <span className="date">{currentPost.date}</span>
              </div>
              <div className="post-body">
                {currentPost.content.split("\n").map((line, i) => {
                  if (line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>;
                  if (line.startsWith("# ")) return <h1 key={i}>{line.slice(2)}</h1>;
                  if (line === "") return <br key={i} />;
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </article>
          )}
          </div>
        </main>
      </div>
    </>
  );
}

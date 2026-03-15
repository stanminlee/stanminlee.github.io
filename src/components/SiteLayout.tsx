"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FULL_NAME = "Stan Lee";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [displayed, setDisplayed] = useState("");
  const glowRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
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

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden />
      <div className="container">
        <header className="header">
          <div className="header-info">
            <h1>
              <Link href="/" style={{ textDecoration: "none" }}>
                {displayed}
                <span className="cursor-blink" aria-hidden>|</span>
              </Link>
            </h1>
            <p className="subtitle">
              Stanford University · M.S. & B.S. Candidate, Electrical Engineering
            </p>
            <div className="social">
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
          <nav className="page-nav">
            <Link href="/" className={`nav-link${pathname === "/" ? " active" : ""}`}>
              Home
            </Link>
            <Link href="/blog" className={`nav-link${pathname.startsWith("/blog") ? " active" : ""}`}>
              Blog
            </Link>
          </nav>

          {children}
        </main>
      </div>
    </>
  );
}

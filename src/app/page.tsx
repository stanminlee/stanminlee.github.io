import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Project from "../components/Project"; // Import the Project component

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="profile">
          <div className="profile-image">
            <Image
              src="/StanLeeHeadshot-min.jpg"
              alt="Profile Picture"
              width={175}
              height={175}
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="profile-info" style={{ marginLeft: "4rem" }}>
            <h1>Stan Lee</h1>
            <p>B.S. Candidate, Electrical Engineering | Stanford</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/stanminlee/" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem" }}/>
              </a>
              <a href="https://github.com/stanminlee" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.5rem" }}/>
              </a>
              <a href="mailto:slee93@stanford.edu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.5rem" }}/>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section style={{ marginBottom: "2rem" }}>
          <p>
          Hey, I'm Stan. I'm an undergraduate at Stanford studying Electrical Engineering, and
          I'm interested in integrated circuits and electronic design automation.
          </p>
        </section>
        <section>
        <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://www.silimate.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Silimate (YC S23)
                  </a>
                </h3>
                <p>Software Intern | Oct 2024 - Dec 2024</p>
                <p>
                  Developed a nightly-run testing platform using Pytest, AWS, and GitHub Actions
                  to ensure robust operation of shipped software tools, and benchmarked software Design
                  Space Exploration (DSE) capabilities.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://rsg.stanford.edu/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Robust Systems Group (Stanford EE Department)
                  </a>
                </h3>
                <p>Undergraduate Researcher | Mar 2024 - Dec 2024</p>
                <p>
                  Worked under Prof. Subhasish Mitra and Samsung on next-generation augmented reality (AR)
                  accelerators after selection to the 2024 EE REU Program.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Projects</h2>
          <Project
            title="Rasterization Accelerator"
            description="Awarded top bracket performance (perfect score) in Stanford Fall 2024 EE 271 Optimization Contest."
            link=""
          />
        </section>
      </main>
    </div>
  );
}
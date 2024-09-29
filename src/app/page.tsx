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
              src="/andrew.jpeg"
              alt="Profile Picture"
              width={175}
              height={175}
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="profile-info" style={{ marginLeft: "4rem" }}>
            <h1>Andrew Shi</h1>
            <p>CS + AI @ Stanford</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/acshi/" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem" }}/>
              </a>
              <a href="https://github.com/andrewcshi" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.5rem" }}/>
              </a>
              <a href="mailto:acshi@stanford.edu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.5rem" }}/>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section style={{ marginBottom: "2rem" }}>
          <h2>About Me</h2>
          <p>
            I'm a junior at Stanford pursuing a BS in Computer Science, concentrating in AI and Systems. I'm also a classically-trained pianist and have performed and competed on international stages.
          </p>
        </section>
        <section>
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://voleon.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    The Voleon Group
                  </a>
                </h3>
                <p>Trading Intern</p>
                <p>Jun 2024 - Aug 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://hai.stanford.edu/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Stanford Human-Centered AI Institute
                  </a>
                </h3>
                <p>Research Assistant</p>
                <p>Oct 2023 - Jun 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://www.dadavidson.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    D.A. Davidson & Co.
                  </a>
                </h3>
                <p>Summer Analyst</p>
                <p>Jun 2023 - Aug 2023</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Projects</h2>
          <Project
            title="Fine-tuning CodeLlama-7B on Synthetic Data for FORTRAN Code Generation with PEFT"
            description="Received Outstanding Custom Project Award from Prof. Tatsunori Hashimoto and Prof. Diyi Yang in Stanford's CS 224N (Natural Language Processing)."
            link="https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1244/final-projects/AndrewCShiSohamGovandeTaeukKang.pdf"
          />
          <Project
            title="2024 AI Index Report"
            description="The Stanford HAI AI Index report tracks, collates, distills, and visualizes data related to artificial intelligence (AI)."
            link="https://aiindex.stanford.edu/wp-content/uploads/2024/05/HAI_AI-Index-Report-2024.pdf"
          />
          <Project
            title="Oculife"
            description="An immersive and interactive first aid medical response XR application for Apple Vision Pro."
            link="https://devpost.com/software/oculife"
          />
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Piano Performance</h2>
          <p>I am a four-time National YoungArts winner, three-time California State First-Prize winner, and was admitted to the Julliard School in 2022.</p>
          <a
            href="/piano"
            className="arrow-link"
            style={{ fontWeight: "bold" }}
          >
            Accolades and Performances
            <FontAwesomeIcon icon={faArrowRightLong} style={{ marginLeft: "0.5rem" }} />
          </a>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            <a href="mailto:acshi@stanford.edu" target="_blank" rel="noopener noreferrer" className="contact-link">
              acshi [at] stanford [dot] edu
            </a>
          </p>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Andrew Shi. All rights reserved.</p>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/acshi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem" }}/>
            </a>
            <a href="https://github.com/andrewcshi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.5rem" }}/>
            </a>
            <a href="mailto:acshi@stanford.edu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.5rem" }}/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
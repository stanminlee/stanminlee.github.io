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
            <p>Stanford University</p>
            <p>M.S. Candidate, Electrical Engineering</p>
            <p>B.S. Candidate, Electrical Engineering</p>
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
          I'm Stan, an undergraduate/graduate student at Stanford studying Electrical Engineering. I believe that giving designers better EDA tools will give
          them the ability to explore more complex designs with less effort; therefore, giving rise to more performant, power efficient, and
          cost effective silicon. I take great pride in my work, and I'm always looking to solve the industry's toughest problems.
          </p>
        </section>
        <section>
        <h2>Experience</h2>
        <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Apple Inc.
                  </a>
                </h3>
                <p>CAD Intern, Top-level Physical Design | June 2025 - Present</p>
                <p>
                  Performing analysis for potential flow improvements and developing tooling to assist design teams.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://www.silimate.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Silimate (YC S23)
                  </a>
                </h3>
                <p>Software Intern | October 2024 - May 2025</p>
                <p>
                  Worked directly under the CEO/CTO to assist in critical infrastructure projects and customer-requested features.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <a href="https://rsg.stanford.edu/" target="_blank" rel="noopener noreferrer" className="company-link">
                    Stanford Department of Electrical Engineering
                  </a>
                </h3>
                <p>Research Intern, Robust Systems Group | June 2024 - August 2024</p>
                <p>
                  Worked on next-generation augmented reality (AR) accelerators after selection to the 2024 EE REU Program.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: "2rem" }}>





        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Relevant Coursework</h2>
          <p>CME 100 - Vector Calculus for Engineers</p>
          <p>CME 102 - Ordinary Differential Equations for Engineers</p>
          <p>CS 103 - Mathematical Foundations of Computing</p>
          <p>CS 106A - Programming Methodology</p>
          <p>CS 106B  - Programming Abstractions</p>
          <p>CS 107 - Computer Organization and Systems</p>
          <p>CS 109 - Introduction to Probability for Computer Scientists</p>
          <p>CS 111 - Operating Systems Principles</p>
          <p>CS 143 - Compilers</p>
          <p>CS 161 - Design and Analysis of Algorithms</p>
          <p>CS 229 - Machine Learning</p>
          <p>EE 64 - Mechanical Prototyping for Electrical Engineers</p>
          <p>EE 65 - Modern Physics for Engineers</p>
          <p>EE 101A - Circuits I</p>
          <p>EE 108 - Digital System Design</p>
          <p>EE 180 - Digital Systems Architecture</p>
          <p>EE 271 - Introduction to VLSI Systems</p>
          <p>EE 272 - Design Projects in VLSI Systems I</p>
          <p>EE 292A - Electronic Design Automation (EDA) and Machine Learning Hardware</p>
        </section>
      </main>
    </div>
  );
}
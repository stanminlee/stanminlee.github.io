import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const experience = [
  {
    company: "Silimate (YC S23)",
    url: "https://www.silimate.com/",
    role: "Founding Engineer",
    dates: "Sep 2025 – Present",
    description: "Silimate is the copilot for chip designers. My key responsibilities include owning/driving core feature development and customer support, which include unicorn startups and Fortune 500s.",
  },
  {
    company: "Apple Inc.",
    url: "https://www.apple.com/",
    role: "CAD Intern, Top-level Physical Design",
    dates: "Jun 2025 – Sep 2025",
    description:
      "Performed analysis for potential flow improvements and developed tooling to assist design teams.",
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
    company: "Stanford Departmentm of Electrical Engineering",
    url: "https://rsg.stanford.edu/",
    role: "Research Intern, Robust Systems Group",
    dates: "Jun 2024 – Aug 2024",
    description:
      "Presented research on next-generation augmented reality accelerators after selection to the 2024 EE REU Program.",
  },
];

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-info">
          <h1>Stan Lee</h1>
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
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    {item.company}
                  </a>
                  <span className="date">{item.dates}</span>
                </div>
                <p className="role">{item.role}</p>
                <p className="desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

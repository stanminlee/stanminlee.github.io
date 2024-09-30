import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faExternalLinkAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const PianoAwards: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Piano</h1>
      </header>
      <main className="main">
        <section>
          <h2>Selected Accolades</h2>
          <ul>
            <li className="text-base">Young Artists Guild, Music Teacher's Association of California (MTAC)</li>
            <li className="text-base">Grand Prize Finalist, Music Center Spotlight</li>
            <li className="text-base">National Competition Winner (four-time), National YoungArts</li>
            <li className="text-base">State Piano Solo and Concerto Competition First Prize (three-time), MTAC</li>
            <li className="text-base">Discretionary Award Winner, Arthur Fraser International Piano Competition</li>
            <li className="text-base">First Prize, ENKOR International Music Competition</li>
            <li className="text-base">Finalist, NPR’s From the Top</li>
            <li className="text-base">Second Place, Los Angeles International Liszt Competition</li>
            <li className="text-base">First Place, Gail Newby Concerto Competition</li>
            <li className="text-base">Second Place, MTAC State VOCE Competition</li>
            <li className="text-base">First Prize and Most Promising Young Musician Award, San Jose International Piano Competition</li>
            <li className="text-base">First Prize, Robert Turner Concerto Competition</li>
          </ul>

          <h2 style={{ marginTop: "1rem" }}>Festivals</h2>
          <ul>
            <li className="text-base">Participant, Southeastern Piano Festival</li>
            <li className="text-base">Invited Participant, Tanglewood Music Festival</li>
          </ul>
          <h2 style={{ marginTop: "1rem" }}>Featured Performances</h2>
          <ul style={{ marginBottom: "2rem" }}>
            <li className="text-base">
              Johann Sebastian Bach | Prelude and Fugue in D major, BK 2, BWV 874
              <a href="https://youtu.be/i01xAg1dlxI?si=NAGyW_LzOSGl-mL9" target="_blank" rel="noopener noreferrer" className="performance-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: "0.5rem" }} />
              </a>
            </li>
            <li className="text-base">
              Wolfgang Amadeus Mozart | Sonata in F Major, K. 332
              <a href="https://youtu.be/85ehsAqoLcQ?si=iCk9zoT6I0_7ILiN" target="_blank" rel="noopener noreferrer" className="performance-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: "0.5rem" }} />
              </a>
            </li>
            <li className="text-base">
              Ludwig van Beethoven | Piano Concerto No. 3 in C Minor, Op. 37, I. Allegro con brio
              <a href="https://youtu.be/Y7H-p1apY2I?si=FR52-h0uQ76dMl3j" target="_blank" rel="noopener noreferrer" className="performance-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: "0.5rem" }} />
              </a>
            </li>
            <li className="text-base">
              Frédéric Chopin | Scherzo No. 3 in C-sharp minor, Op. 39
              <a href="https://youtu.be/l7gq0ZXysIA?si=VIGhI3oa1_7Z5Wpt" target="_blank" rel="noopener noreferrer" className="performance-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: "0.5rem" }} />
              </a>
            </li>
            <li className="text-base">
              Sergei Rachmaninoff | Sonata No. 2, Op. 36, I. Allegro agitato
              <a href="https://youtu.be/Z4Enexm2zAk?si=WfbzmwyU-RA6pIx5" target="_blank" rel="noopener noreferrer" className="performance-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: "0.5rem" }} />
              </a>
            </li>
            <li className="text-base">
              William Bolcom | The Garden of Eden, III. The Serpent's Kiss
              <a href="https://youtu.be/GledMNFjNuo?si=OA7VaRExn4l2KiQc" target="_blank" rel="noopener noreferrer" className="performance-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: "0.5rem" }} />
              </a>
            </li>
            <li className="text-base">
              Carl Vine | Five Bagatelles, Op. 10
              <a href="https://youtu.be/e9xUj-Bdd0M?si=BLUaPsJDRo1qOc85" target="_blank" rel="noopener noreferrer" className="performance-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: "0.5rem" }} />
              </a>
            </li>
          </ul>

          <a
            href="/"
            className="back-arrow"
            style={{ fontWeight: "bold" }}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} style={{ marginRight: "0.5rem" }} />
            Home
          </a>
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
};

export default PianoAwards;
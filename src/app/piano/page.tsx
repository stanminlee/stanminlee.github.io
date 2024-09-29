import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const PianoAwards: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Piano Awards</h1>
      </header>
      <main className="main">
        <section>
          <h2>Selected Accolades</h2>
          <ul>
            <li>Young Artists Guild, Music Teacher's Association of California (MTAC)</li>
            <li>Grand Prize Finalist, Music Center Spotlight</li>
            <li>National Competition Winner (four-time), National YoungArts</li>
            <li>State Piano Solo and Concerto Competition First Prize (three-time), MTAC</li>
            <li>Discretionary Award Winner, Arthur Fraser International Piano Competition</li>
            <li>First Prize, ENKOR International Music Competition</li>
            <li>Finalist, NPR’s From the Top</li>
            <li>Second Place, Los Angeles International Liszt Competition</li>
            <li>First Place, Gail Newby Concerto Competition</li>
            <li>Second Place, MTAC State VOCE Competition</li>
            <li>First Prize and Most Promising Young Musician Award, San Jose International Piano Competition</li>
            <li>First Prize, Robert Turner Concerto Competition</li>
          </ul>

          <h2 style={{ marginTop: "1rem" }}>Festivals</h2>
          <ul>
            <li>Participant, Southeastern Piano Festival</li>
            <li>Invited Participant, Tanglewood Music Festival</li>
          </ul>

          <h2 style={{ marginTop: "1rem" }}>Featured Performances</h2>
          <ul style={{ marginBottom: "2rem" }}>
            <li>Johann Sebastian Bach | Prelude and Fugue in D major, BK 2, BWV 874</li>
            <li>Wolfgang Amadeus Mozart | Sonata in F Major, K. 332</li>
            <li>Ludwig van Beethoven | Piano Concerto No. 3 in C Minor, Op. 37, I. Allegro con brio</li>
            <li>Sergei Rachmaninoff | Sonata No. 2, Op. 36, I. Allegro agitato</li>
            <li>Frédéric Chopin | Scherzo No. 3 in C-sharp minor, Op. 39</li>
            <li>William Bolcom | The Garden of Eden, III. The Serpent's Kiss</li>
            <li>Carl Vine | Five Bagatelles, Op. 10</li>
          </ul>

          <a
            href="/website"
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
        </div>
      </footer>
    </div>
  );
};

export default PianoAwards;
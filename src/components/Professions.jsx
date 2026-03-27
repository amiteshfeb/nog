import React from 'react';
import './Professions.css';

const professions = [
  'Fotografen', 'Helpende', 'Interim Managers', 'Consultants',
  "IT'ers", 'Klusjesmannen', 'Beveiligers', 'Kappers',
];

const Professions = () => {
  return (
    <section className="professions" style={{ display: 'none' }}>
      <div className="professions__container">
        <h2 className="professions__heading">Wij verzekeren:</h2>
        <div className="professions__grid">
          {professions.map((profession, index) => (
            <a href="#" className="professions__card" key={index}>
              <span className="professions__card-name">{profession}</span>
              <span className="professions__card-arrow">&rarr;</span>
            </a>
          ))}
        </div>
        <a href="#" className="professions__more">
          <span>... en nog meer zelfstandigen</span>
          <span className="professions__more-arrow">&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default Professions;

import React from 'react';
import './SmartGuide.css';
import smartGuidePhone from '../assets/media/smartguide-phone.png';

const SmartGuide = () => {
  return (
    <section className="smartguide">
      <div className="smartguide__container">
        <div className="smartguide__content">
          <h2 className="smartguide__heading">
            Lage premies en flexibele voorwaarden
          </h2>
          <p className="smartguide__text">
            Veel AOV’s bevatten onnodige extra’s die je alleen maar geld kosten. Kies daarom alleen de dekking die je echt nodig hebt. Zo bespaar je op je premie zonder in te leveren op zekerheid.
          </p>
          <a href="https://aov.nog-gemakkelijker.nl/premium/" target="_blank" rel="noreferrer" className="smartguide__btn">
            <span>Bereken je premie</span>
            <span>Bereken je premie</span>
          </a>
        </div>
        <div className="smartguide__image">
          <img
            src={smartGuidePhone}
            alt="SmartGuide - mobiel"
          />
        </div>
      </div>
    </section>
  );
};

export default SmartGuide;

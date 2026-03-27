import React, { useState, useEffect, useRef } from 'react';
import './Features.css';

const features = [
  {
    title: '100% online, 100% regie.',
    description:
      'Sluit je AOV af waar en wanneer het jou uitkomt. Geen gedoe met afspraken buiten de deur, maar gewoon in je eigen tijd alles online regelen.',
  },
  {
    title: 'Direct inzicht in je premie',
    description:
      'Geen verrassingen achteraf. Pas je dekking aan en zie direct wat elke keuze doet met je maandpremie. Zo bepaal jij zelf de balans tussen zekerheid en kosten.',
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const DURATION = 5000;
    const TICK = 50;
    let elapsed = 0;

    const startCycle = () => {
      elapsed = 0;
      setProgress(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        elapsed += TICK;
        const pct = Math.min((elapsed / DURATION) * 100, 100);
        setProgress(pct);
        if (elapsed >= DURATION) {
          setActiveIndex((prev) => (prev + 1) % features.length);
          elapsed = 0;
          setProgress(0);
        }
      }, TICK);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCycle();
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
    const DURATION = 5000;
    const TICK = 50;
    let elapsed = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      elapsed += TICK;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        setActiveIndex((prev) => (prev + 1) % features.length);
        elapsed = 0;
        setProgress(0);
      }
    }, TICK);
  };

  return (
    <section className="features" ref={sectionRef}>
      <div className="features__container">
        <div className="features__media">
          {/* Panel 1: Package configurator */}
          <div className={`features__panel${activeIndex === 0 ? ' features__panel--active' : ''}`}>
            <div className="features__mockup-config">
              <div className="features__mockup-header">
                <h3>Stel je pakket samen</h3>
                <p>Geef per product je voorkeur aan</p>
              </div>
              <div className="features__mockup-price">
                <span className="features__price-amount">v.a. €29</span>
                <span className="features__price-cents">,-</span>
                <span className="features__price-period">/mnd</span>
              </div>
              <div className="features__mockup-cards">
                <div className="features__mockup-card">Kies je dekking</div>
                <div className="features__mockup-card features__mockup-card--offset1">Je uitkeringsduur</div>
                <div className="features__mockup-card features__mockup-card--offset2 features__mockup-card--expanded">
                  <div className="features__mockup-card-title">Je wachttijd</div>
                  <div className="features__mockup-card-value">6 maanden</div>
                  <div className="features__mockup-card-dots">
                    <span className="features__dot features__dot--green">&#10003;</span>
                    <span className="features__dot features__dot--green">&#10003;</span>
                    <span className="features__dot features__dot--green">&#10003;</span>
                    <span className="features__dot features__dot--active">6</span>
                    <span className="features__dot">12</span>
                    <span className="features__dot">24</span>
                  </div>
                  <div className="features__mockup-card-footer">
                    Je hebt een buffer van zo'n <strong>&euro; 15.000</strong> nodig
                    <span className="features__arrow">&rsaquo;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Profession finder */}
          <div className={`features__panel${activeIndex === 1 ? ' features__panel--active' : ''}`}>
            <div className="features__mockup-profession">
              <div className="features__mockup-search">
                <span className="features__search-icon">&#128269;</span>
                <span>Zoek je beroep...</span>
              </div>
              <div className="features__profession-list">
                <div className="features__profession-item features__profession-item--active">
                  <span className="features__check">&#10003;</span> Consultant
                </div>
                <div className="features__profession-item">IT-specialist</div>
                <div className="features__profession-item">Fotograaf</div>
                <div className="features__profession-item">Trainer / Coach</div>
                <div className="features__profession-item">Marketeer</div>
              </div>
              <p className="features__profession-hint">Meer dan 800 beroepen beschikbaar</p>
            </div>
          </div>

          {/* Panel 3: AI chat */}
          <div className={`features__panel${activeIndex === 2 ? ' features__panel--active' : ''}`}>
            <div className="features__mockup-ai">
              <div className="features__ai-bubble features__ai-bubble--question">
                <span>Kan ik mijn wachttijd later nog aanpassen?</span>
              </div>
              <div className="features__ai-bubble features__ai-bubble--faded">
                <span>Hoe kies ik mijn wachttijd?</span>
              </div>
              <div className="features__ai-response">
                <div className="features__ai-avatar">&#9654;</div>
                <div className="features__ai-text">
                  <strong>Nog Gemakkelijker AI</strong>
                  <p>De wachttijd is de periode die je financieel zelf moet overbruggen voordat je AOV-uitkering start.</p>
                  <p>Het is verstandig om rekening te houden met hoeveel spaargeld je hebt en hoeveel je daarvan kan en wil aanspreken.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features__items">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`features__item${activeIndex === index ? ' features__item--active' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <div className="features__item-progress">
                {activeIndex === index && (
                  <div
                    className="features__item-progress-fill"
                    style={{ height: `${progress}%` }}
                  />
                )}
              </div>
              <div className="features__item-content">
                <h3 className="features__item-title">{feature.title}</h3>
                <p className="features__item-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React, { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './Hero.css';
import heroImg1 from '../assets/media/pexels-n-voitkevich-5186296.png';
import heroImg2 from '../assets/media/pexels-shkrabaanthony-7175953.png';
import heroImg3 from '../assets/media/pexels-n-voitkevich-5186354.png';
import thumbsUpAnimation from '../assets/media/thumbs-up.json';

const cards = [
  {
    price: 'Vanaf €29/maand',
    title: 'Budget AOV “Online”',
    description: 'Budget arbeidsongeschiktheidsverzekering: lage premie en veel flexibiliteit.',
    image: heroImg1,
    cta: 'https://aov.nog-gemakkelijker.nl/premium/',
  },
  {
    price: 'Vanaf €30/maand',
    title: 'Beroepsaansprakelijkheids (BAV)',
    description: 'voor de meeste ZZP-ers een must.',
    image: heroImg2,
    cta: '/aanvraagformulier',
  },
  {
    price: 'Vanaf €7,95/maand',
    title: 'Bedrijfsaansprakelijkheids (AVB)',
    description: 'Voor schade door ongelukken op de werkvloer.',
    image: heroImg3,
    cta: '/avb-aanvraag',
  },
];

const mediaLogos = [
  {
    src: '/award-dfo-2023.png',
    alt: 'TAF winnaar performance onderzoek 2023',
  },
  {
    src: '/award-igh-81.png',
    alt: 'IG&H cijfer 8,1 categorie leven',
  },
  {
    src: '/award-gouden-lotus-2023.png',
    alt: 'TAF winnaar gouden lotus award 2023',
  },
];

function Hero({ animateIn }) {
  const cardsRef = useRef(null)
  const [trustVisible, setTrustVisible] = useState(true)

  useEffect(() => {
    const el = cardsRef.current
    if (!el) return
    const handleScroll = () => {
      // Hide trust bar as soon as user starts scrolling (> 10px)
      setTrustVisible(window.scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`hero${animateIn ? ' hero--animate' : ''}`}>
      <div ref={cardsRef} className="hero__cards-container">
        <div className="hero__cards-grid">
          {cards.map((card, index) => (
            <div className={`hero__card-wrapper${animateIn ? ' hero__card-wrapper--animate' : ''}`} key={index}>
              <div className="hero__card">
                {/* Background image */}
                <img src={card.image} alt={card.title} className="hero__card-bg" />

                {/* Price badge */}
                <div className="hero__card-badge">
                  <span>{card.price}</span>
                </div>

                {/* Bottom overlay with text */}
                <div className="hero__card-overlay">
                  <h2 className="hero__card-title">{card.title}</h2>
                  <p className="hero__card-description">{card.description}</p>
                  <a className="hero__card-btn" href={card.cta}>
                    <span>Bereken je premie</span>
                    <span>Bereken je premie</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust bar - hides when cards scroll out of view */}
      <div className={`hero__trust-bar${trustVisible ? '' : ' hero__trust-bar--hidden'}`}>
        <div className="hero__trustpilot">
          <Lottie
            animationData={thumbsUpAnimation}
            loop={false}
            autoplay
            className="hero__trustpilot-icon"
          />
          <span className="hero__trustpilot-label">Hier zijn wij trots op</span>
        </div>
        <div className="hero__media-logos">
          {mediaLogos.map((logo, index) => (
            <span className="hero__media-logo" key={index}>
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || 'Logo'}
                  className="hero__media-logo-img"
                />
              ) : (
                logo.label
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    initials: 'PV',
    name: 'Patrick Verbaarschot',
    role: 'Consultant/coach',
    quote:
      'Al een paar jaar had ik elders een AOV. Maar in deze verzekering zat een clausule waardoor ik niet verzekerd was bij arbeidsongeschiktheid door psychische oorzaak. Dat vond ik vervelend. Ik was namelijk bezorgd dat als ik arbeidsongeschikt zou raken, de verzekeraar hoe dan ook zou claimen dat de oorzaak psychisch zou zijn. Misschien was mijn bezorgdheid niet terecht, maar het bleef knagen.',
    rating: 5,
  },
  {
    initials: 'VM',
    name: 'Veeru Mewa',
    role: 'Advocaat',
    quote:
      'Al jaren had ik een AOV en BAV elders lopen. Dat liep via mijn toenmalige kantoor. Toen ik van werkomgeving veranderde ben ik me eens gaan verdiepen in de alternatieven. Na gedegen adviesgesprekken met Arne Verduijn kwam ik er achter dat de specifieke verzekeringen die ik nodig had, vele malen goedkoper konden worden afgesloten bij een andere verzekeraar. Zoek je een betrouwbare en deskundige partij, dan moet je bij New Wave Assurances zijn!',
    rating: 5,
  },
  {
    initials: 'LR',
    name: 'Lisa Rispens',
    role: 'Dierenarts',
    quote:
      'Vanwege werkzaamheden als dierenarts in Zweden hadden mijn vriend en ik een aansprakelijkheidsverzekering nodig. Door de complexiteit hebben we de hulp ingeschakeld van nog gemakkelijker. Binnen afzienbare tijd had de adviseur het voor elkaar. Wat onszelf voor geen mogelijkheid lukte.',
    rating: 5,
  },
  {
    initials: 'AK',
    name: 'Anonieme klant',
    role: 'Klant',
    quote:
      'Ik heb de begeleiding als zeer informatief en klantvriendelijk ervaren. Vooraf had ik mijn twijfels of dit traject van advisering om te komen tot een AOV verzekering telefonisch goed kon worden bewandeld. Achteraf was deze twijfel onterecht. De adviseur heeft mij telkens tijdig geadviseerd en geïnformeerd om te komen tot de opeenvolgende stappen in het traject van het doen van een aanvraag tot het tot stand komen van de verzekering. Uiteindelijk is het traject zonder verrassingen en met een gunstig resultaat afgehandeld in +/- 6 weken. Dit alles voor een gunstig en acceptabel tarief!',
    rating: 5,
  },
  {
    initials: 'RP',
    name: 'Rinske Pauw',
    role: 'Adviseur/ ziekenhuis apotheker',
    quote:
      'Als startend zzp-er ben ik mij in 2020 gaan oriënteren voor de best passende verzekeringen, zo ook een AOV. Ik kwam er echter al snel achter, dat mijn werk als o.a. zelfstandig ziekenhuisapotheker-adviseur, niet in de standaard hokjes van een aantal verzekeringsmaatschappijen past en zelf een verzekering afsluiten daarmee moeizaam zou zijn. We hebben elkaar nooit live ontmoet, maar door zijn snelle reactie op mails of telefoontjes en het stipt nakomen van zijn afspraken, is de samenwerking toch persoonlijk en heel prettig verlopen.',
    rating: 5,
  },
  {
    initials: 'CV',
    name: 'Casimir Vink',
    role: 'Rechtnet advocaten',
    quote:
      'Zeer goed bedrijf. Ze hebben me echt snel en vakkundig geholpen toen het erom ging. Gelukkig schakelen ze vlug en hebben ze een beduidend goedkopere beroepsaansprakelijkheidsverzekering voor ons kunnen regelen.',
    rating: 5,
  },
  {
    initials: 'JH',
    name: 'Jan Hendriks',
    role: 'Zelfstandig Timmerman',
    quote:
      'Na mijn rugblessure kreeg ik binnen 2 weken mijn eerste uitkering. De aanvraag was simpel en duidelijk. Geen kleine lettertjes, gewoon goede service.',
    rating: 5,
    timeAgo: '3 weken geleden',
  },
  {
    initials: 'MV',
    name: 'Marco van der Veen',
    role: 'Elektricien ZZP',
    quote:
      'Als ZZP’er moet je zelf alles regelen. Deze AOV is betaalbaar en de voorwaarden zijn helder. Ik betaal €52 per maand en ben volledig gedekt.',
    rating: 5,
    timeAgo: '1 maand geleden',
  },
  {
    initials: 'PS',
    name: 'Peter Smit',
    role: 'Schilder',
    quote:
      'Goede verzekering voor een eerlijke prijs. Had een burn-out en ze hebben me goed geholpen. Enige minpunt: de app kan beter.',
    rating: 4,
    timeAgo: '2 maanden geleden',
  },
  {
    initials: 'RB',
    name: 'Rob Bakker',
    role: 'Loodgieter ZZP',
    quote:
      'Vergeleken met andere aanbieders is dit echt de beste deal. Snelle uitkering toen ik mijn knie blesseerde. Top service!',
    rating: 5,
    timeAgo: '2 maanden geleden',
  },
  {
    initials: 'AJ',
    name: 'André Jansen',
    role: 'Dakdekker',
    quote:
      'In ons vak is het risico groot. Deze AOV geeft me rust. Makkelijk aan te vragen, betaalbare premie en ik weet dat ze me steunen wanneer ik het nodig heb.',
    rating: 5,
    timeAgo: '3 maanden geleden',
  },
  {
    initials: 'TD',
    name: 'Tom de Boer',
    role: 'Stukadoor ZZP',
    quote:
      'Direct online afgesloten, geen gezeur. Toen ik uitviel door corona hebben ze perfect geholpen. Aanrader voor elke ZZP’er!',
    rating: 5,
    timeAgo: '4 maanden geleden',
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightAnimated, setHighlightAnimated] = useState(false);
  const [slideWidth, setSlideWidth] = useState(480);
  const intervalRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);

  const maxIndex = testimonials.length - 1;

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector('.testimonials__card-wrapper');
        if (firstCard) {
          setSlideWidth(firstCard.offsetWidth + 0); // padding already inside wrapper
        }
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!headingRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !highlightAnimated) {
          setHighlightAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, [highlightAnimated]);

  const goTo = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__heading" ref={headingRef}>
          Meer dan <span className={`testimonials__highlight${highlightAnimated ? ' testimonials__highlight--animate' : ''}`}>10.000</span> ondernemers vertrouwen al op ons
        </h2>

        <div className="testimonials__carousel">
          <div
            className="testimonials__track"
            ref={trackRef}
            style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
          >
            {testimonials.map((t, i) => (
              <div className="testimonials__card-wrapper" key={i}>
                <div className="testimonials__card">
                  {typeof t.rating === 'number' && (
                    <div
                      className="testimonials__rating"
                      aria-label={`${t.rating} van 5 sterren`}
                    >
                      {'★'.repeat(t.rating)}
                      {'☆'.repeat(5 - t.rating)}
                    </div>
                  )}
                  <p className="testimonials__quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonials__author">
                    <div className="testimonials__avatar">
                      {t.photo ? <img src={t.photo} alt={t.name} /> : t.initials}
                    </div>
                    <div>
                      <div className="testimonials__name">{t.name}</div>
                      <div className="testimonials__role">{t.role}</div>
                    </div>
                  </div>
                  {t.timeAgo && <div className="testimonials__meta">{t.timeAgo}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${currentIndex === i ? ' testimonials__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

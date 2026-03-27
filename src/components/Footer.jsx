import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('ng-cookie-consent');
      if (!consent) setShowCookieBanner(true);
    } catch (e) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem('ng-cookie-consent', 'true');
    } catch (e) {
      // ignore storage errors
    }
    setShowCookieBanner(false);
  };

  return (
    <>
      {/* Contact / Help Section */}
      <section className="contact">
        <div className="contact__container">
          <h2 className="contact__heading">Hoe kunnen we je helpen?</h2>
          <div className="contact__grid">
            <div className="contact__item">
              <div className="contact__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Whatsapp</h3>
                <p className="contact__item-text">
                  Wij beantwoorden je vragen van maandag t/m vrijdag van 09:00 tot 18:00.
                </p>
                <a href="https://wa.me/31617458939" target="_blank" rel="noreferrer" className="contact__item-link">Stuur een bericht</a>
              </div>
            </div>
            <div className="contact__item">
              <div className="contact__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">Telefoon</h3>
                <p className="contact__item-text">
                  Bel ons maandag t/m vrijdag van 09:00 tot 18:00 op +31 85 401 4776.
                </p>
                <a href="tel:+31854014776" className="contact__item-link">Bel ons</a>
              </div>
            </div>
            <div className="contact__item">
              <div className="contact__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="contact__item-content">
                <h3 className="contact__item-title">E-mail</h3>
                <p className="contact__item-text">
                  E-mail ons 24/7 op info@nog-gemakkelijker.nl. We reageren zo snel mogelijk.
                </p>
                <a href="mailto:info@nog-gemakkelijker.nl" className="contact__item-link">Mail ons</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__bottom">
            <div className="footer__logo">
              <span className="footer__logo-text">Nog Gemakkelijker</span>
            </div>
            <p className="footer__info">
              Nog Gemakkelijker &middot; Label van New Wave Assurances &middot; KVK 71068600 &middot; AFM 12045976
            </p>
            <p className="footer__privacy">
              <a href="https://www.newwaveassurances.com/algemene-voorwaarden/" target="_blank" rel="noreferrer">Privacy verklaring</a> &middot;{' '}
              <a href="https://www.newwaveassurances.com/algemene-voorwaarden/" target="_blank" rel="noreferrer">Algemene voorwaarden</a> &middot;{' '}
              <a href="https://www.newwaveassurances.com/dienstenwijzer/" target="_blank" rel="noreferrer">Dienstenwijzer</a> &middot;{' '}
              <a href="https://www.newwaveassurances.com/beloningsbeleid/" target="_blank" rel="noreferrer">Doel beloningsbeleid</a>
            </p>
            <p className="footer__copyright">
              &copy; - Nog Gemakkelijker 2026
            </p>
          </div>
        </div>
      </footer>
      {showCookieBanner && (
        <div className="cookie-banner">
          <div className="cookie-banner__text">
            We gebruiken cookies voor een betere ervaring en analyse. Door op accepteren te klikken ga je akkoord met het gebruik van cookies. Lees meer in onze{' '}
            <a href="https://www.newwaveassurances.com/algemene-voorwaarden/" target="_blank" rel="noreferrer">Privacy verklaring</a>.
          </div>
          <div className="cookie-banner__actions">
            <button type="button" className="cookie-banner__btn" onClick={acceptCookies}>Accepteren</button>
            <a className="cookie-banner__link" href="https://www.newwaveassurances.com/algemene-voorwaarden/" target="_blank" rel="noreferrer">Meer info</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;

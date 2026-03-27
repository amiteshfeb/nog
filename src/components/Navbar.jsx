import React, { useState } from 'react';
import Lottie from 'lottie-react';
import './Navbar.css';
import logoAnimation from '../assets/media/arrow-arc-1.json';

const NogGemakkelijkerLogo = () => (
  <Lottie
    animationData={logoAnimation}
    loop={false}
    autoplay
    style={{ width: 50, height: 50 }}
  />
);

const Navbar = ({ transparent }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`navbar-wrapper${transparent ? ' navbar-wrapper--transparent' : ''}`}>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>Voldoe aan de geplande <strong>AOV-plicht</strong></span>
        <a
          className="announcement-bar-btn"
          href="/blog/wet-baz-2026-peildatum-en-opt-out"
        >
          <span>Lees nu</span>
          <span>Lees nu</span>
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <NogGemakkelijkerLogo />
          <span className="navbar-logo-text">Nog Gemakkelijker</span>
        </a>

        {/* Hamburger Button */}
        <button
          className={`navbar-hamburger${mobileMenuOpen ? ' navbar-hamburger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Center Nav Links */}
        <ul className="navbar-links">
          {/* Verzekeringen */}
          <li className="navbar-dropdown">
            <a href="#verzekeringen">Verzekeringen</a>
            <div className="mega-menu mega-menu--single">
              <div className="mega-menu__body">
                <div className="mega-menu__column">
                  <div className="mega-menu__group">
                    <span className="mega-menu__heading">Verzekeringen voor je onderneming</span>
                    <a href="https://aov.nog-gemakkelijker.nl/premium/" target="_blank" rel="noreferrer" className="mega-menu__link">Arbeidsongeschiktheidsverzekering</a>
                    <a href="/aanvraagformulier" className="mega-menu__link">Beroepsaansprakelijkheidsverzekering</a>
                    <a href="/avb-aanvraag" className="mega-menu__link">Aansprakelijkheid bedrijven</a>
                  </div>
                </div>
              </div>
              <div className="mega-menu__footer">
                <a href="https://aov.nog-gemakkelijker.nl/premium/" target="_blank" rel="noreferrer" className="mega-menu__footer-link">Bereken je premie</a>
              </div>
            </div>
          </li>

          {/* Kennis */}
          <li className="navbar-dropdown">
          <a href="#kennis">Kennis</a>
            <div className="mega-menu mega-menu--two-col">
              <div className="mega-menu__body">
                <div className="mega-menu__column">
                  <div className="mega-menu__group">
                    <span className="mega-menu__heading">Laatste blogs</span>
                    <a href="/blog/verschil-beroepsaansprakelijkheid-bedrijfsaansprakelijkheid" className="mega-menu__link">Verschil BAV vs AVB</a>
                    <a href="/blog/hoe-een-beroepsaansprakelijkheidsverzekering-een-loodgieter-redde" className="mega-menu__link">BAV redt een loodgieter</a>
                    <a href="/blog/hoe-een-beroepsaansprakelijkheidsverzekering-een-elektricien-redde" className="mega-menu__link">BAV redt een elektricien</a>
                    <a href="/blog/wet-baz-2026-peildatum-en-opt-out" className="mega-menu__link">Wet BAZ: peildatum 2026</a>
                    <a href="/blog/de-verplichte-aov-wet-baz-waarom-2026-beslissend-is" className="mega-menu__link">Verplichte AOV in 2026</a>
                  </div>
                  <div className="mega-menu__group">
                    <span className="mega-menu__heading">AOV & verzekeringen</span>
                    <a href="/blog/aov-2026-private-flexibiliteit-vs-publiek-vangnet" className="mega-menu__link">AOV: privé flexibiliteit</a>
                    <a href="/blog/verzekeringspakket-voor-zzpers-in-2026" className="mega-menu__link">Zzp verzekeringspakket</a>
                    <a href="/blog/bedrijfaansprakelijkheid-schade-aan-spullen-en-personen" className="mega-menu__link">AVB: schade & letsel</a>
                  </div>
                </div>
                <div className="mega-menu__column">
                  <div className="mega-menu__cta-card">
                    <span className="mega-menu__cta-heading">De verplichte AOV</span>
                    <span className="mega-menu__cta-subtitle">Alles wat je moet weten</span>
                    <a href="/blog/wet-baz-2026-peildatum-en-opt-out" className="mega-menu__cta-button"><span>Lees nu</span><span>Lees nu</span></a>
                  </div>
                </div>
              </div>
              <div className="mega-menu__footer">
                <a href="/#blog" className="mega-menu__footer-link">Naar alle blogs</a>
              </div>
            </div>
          </li>

          {/* Contact */}
          <li className="navbar-dropdown">
            <a href="#contact">Contact</a>
            <div className="mega-menu mega-menu--two-col">
              <div className="mega-menu__body">
                <div className="mega-menu__column">
                  <a href="/schade-melden" className="mega-menu__link">Schade melden</a>
                  <a href="/#faq" className="mega-menu__link">Veelgestelde vragen</a>
                </div>
                <div className="mega-menu__column">
                  <div className="mega-menu__cta-card">
                    <span className="mega-menu__cta-heading">Vragen of schade?</span>
                    <span className="mega-menu__cta-subtitle">Of gewoon even kletsen?</span>
                    <a href="/contact" className="mega-menu__cta-button"><span>Neem contact op</span><span>Neem contact op</span></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* Right Section */}
        <div className="navbar-right">
          <a className="navbar-cta" href="https://aov.nog-gemakkelijker.nl/premium/" target="_blank" rel="noreferrer">
            <span>Bereken je premie</span><span>Bereken je premie</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu${mobileMenuOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__links">
          <div className="mobile-menu__section">
            <span className="mobile-menu__section-heading">Verzekeringen</span>
            <a href="https://aov.nog-gemakkelijker.nl/premium/" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>Arbeidsongeschiktheidsverzekering</a>
            <a href="/aanvraagformulier" onClick={() => setMobileMenuOpen(false)}>Beroepsaansprakelijkheidsverzekering</a>
            <a href="/avb-aanvraag" onClick={() => setMobileMenuOpen(false)}>Aansprakelijkheid bedrijven</a>
          </div>
          <div className="mobile-menu__section">
            <span className="mobile-menu__section-heading">Kennis</span>
            <a href="/blog/verschil-beroepsaansprakelijkheid-bedrijfsaansprakelijkheid" onClick={() => setMobileMenuOpen(false)}>Verschil BAV vs AVB</a>
            <a href="/blog/hoe-een-beroepsaansprakelijkheidsverzekering-een-loodgieter-redde" onClick={() => setMobileMenuOpen(false)}>BAV redt een loodgieter</a>
            <a href="/blog/hoe-een-beroepsaansprakelijkheidsverzekering-een-elektricien-redde" onClick={() => setMobileMenuOpen(false)}>BAV redt een elektricien</a>
            <a href="/blog/wet-baz-2026-peildatum-en-opt-out" onClick={() => setMobileMenuOpen(false)}>Wet BAZ: peildatum 2026</a>
            <a href="/blog/de-verplichte-aov-wet-baz-waarom-2026-beslissend-is" onClick={() => setMobileMenuOpen(false)}>Verplichte AOV in 2026</a>
          </div>
          <div className="mobile-menu__section">
            <span className="mobile-menu__section-heading">Contact</span>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contactpagina</a>
            <a href="/schade-melden" onClick={() => setMobileMenuOpen(false)}>Schade melden</a>
            <a href="/#faq" onClick={() => setMobileMenuOpen(false)}>Veelgestelde vragen</a>
          </div>
        </div>
        <div className="mobile-menu__actions">
          <a className="mobile-menu__cta" href="https://aov.nog-gemakkelijker.nl/premium/" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>Bereken je premie</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

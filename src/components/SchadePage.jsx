import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './SchadePage.css';

const SchadePage = () => {
  return (
    <>
      <Navbar transparent={false} />
      <main className="schade-page">
        <section className="schade-page__hero">
          <div className="schade-page__hero-inner">
            <p className="schade-page__eyebrow">Schade melden</p>
            <h1 className="schade-page__title">Meld je schade snel en eenvoudig</h1>
            <p className="schade-page__subtitle">
              Vul het formulier in en we nemen zo snel mogelijk contact met je op om je te helpen bij de afhandeling.
            </p>
          </div>
        </section>

        <section className="schade-page__content">
          <div className="schade-page__card">
            <h2>Schadeformulier</h2>
            <form className="schade-page__form" action="https://formspree.io/f/xbdprqgz" method="POST">
              <input type="hidden" name="_subject" value="Schade melden - Nog Gemakkelijker" />
              <div className="schade-page__grid">
                <label className="schade-page__field">
                  <span>Naam *</span>
                  <input name="naam" type="text" required />
                </label>
                <label className="schade-page__field">
                  <span>E-mail *</span>
                  <input name="email" type="email" required />
                </label>
                <label className="schade-page__field">
                  <span>Telefoon</span>
                  <input name="telefoon" type="tel" />
                </label>
                <label className="schade-page__field">
                  <span>Polisnummer</span>
                  <input name="polisnummer" type="text" />
                </label>
                <label className="schade-page__field">
                  <span>Datum van de schade</span>
                  <input name="datum" type="date" />
                </label>
                <label className="schade-page__field schade-page__field--full">
                  <span>Omschrijving van de schade *</span>
                  <textarea name="omschrijving" rows="4" required />
                </label>
              </div>
              <button type="submit" className="schade-page__submit">Verstuur melding</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SchadePage;

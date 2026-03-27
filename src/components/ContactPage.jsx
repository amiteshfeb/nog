import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <Navbar transparent={false} />
      <main className="contact-page">
        <section className="contact-page__hero">
          <div className="contact-page__hero-inner">
            <p className="contact-page__eyebrow">Contact</p>
            <h1 className="contact-page__title">Neem contact met ons op</h1>
            <p className="contact-page__subtitle">
              Laat je gegevens achter en we nemen zo snel mogelijk contact met je op. Je kunt ons ook bereiken via info@nog-gemakkelijker.nl of +31 85 401 4776.
            </p>
          </div>
        </section>

        <section className="contact-page__content">
          <div className="contact-page__card">
            <h2>Stuur ons een bericht</h2>
            <form className="contact-page__form" action="https://formspree.io/f/mojpayjv" method="POST">
              <input type="hidden" name="_subject" value="Contactformulier Nog Gemakkelijker" />
              <div className="contact-page__grid">
                <label className="contact-page__field">
                  <span>Naam *</span>
                  <input name="naam" type="text" required />
                </label>
                <label className="contact-page__field">
                  <span>E-mail *</span>
                  <input name="email" type="email" required />
                </label>
                <label className="contact-page__field">
                  <span>Telefoon</span>
                  <input name="telefoon" type="tel" />
                </label>
                <label className="contact-page__field contact-page__field--full">
                  <span>Bericht *</span>
                  <textarea name="bericht" rows="4" required />
                </label>
              </div>
              <button type="submit" className="contact-page__submit">Verstuur</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

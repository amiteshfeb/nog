import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './FormPage.css';

const AvbFormPage = () => {
  return (
    <>
      <Navbar transparent={false} />
      <main className="form-page">
        <header className="form-page__hero">
          <div className="form-page__hero-inner">
            <p className="form-page__eyebrow">Aanvraag</p>
            <h1 className="form-page__title">AVB Aanvraag</h1>
            <p className="form-page__subtitle">
              Vul het formulier in en wij nemen zo snel mogelijk contact met je op met een passende
              AVB-offerte.
            </p>
          </div>
        </header>

        <section className="form-page__content">
          <form
            className="form"
            action="https://formspree.io/f/mlgpqyaj"
            method="POST"
          >
            <input type="hidden" name="_subject" value="AVB Aanvraag" />

            <h2 className="form__section-title">1. Bedrijfsgegevens</h2>
            <div className="form__grid">
              <label className="form__field form__field--full">
                <span className="form__label">Geconsolideerde jaaromzet (excl. BTW)</span>
                <input name="jaaromzet" type="text" placeholder="Geconsolideerde jaaromzet (excl. BTW)" />
              </label>
              <label className="form__field">
                <span className="form__label">Aantal medewerkers</span>
                <input name="aantal_medewerkers" type="text" placeholder="Aantal medewerkers" />
              </label>
              <label className="form__field">
                <span className="form__label">Loonsom</span>
                <input name="loonsom" type="text" placeholder="Loonsom" />
              </label>
            </div>

            <h2 className="form__section-title">2. Dekking</h2>
            <div className="form__grid">
              <label className="form__field">
                <span className="form__label">Eigen risico</span>
                <select name="eigen_risico">
                  <option value="">Kies een optie</option>
                  <option value="€ 0,00">€ 0,00</option>
                  <option value="€ 125,00">€ 125,00</option>
                  <option value="€ 250,00">€ 250,00</option>
                  <option value="€ 500,00">€ 500,00</option>
                  <option value="€ 1.000,00">€ 1.000,00</option>
                  <option value="€ 2.500,00">€ 2.500,00</option>
                  <option value="€ 5.000,00">€ 5.000,00</option>
                  <option value="€ 10.000,00">€ 10.000,00</option>
                  <option value="€ 25.000,00">€ 25.000,00</option>
                </select>
              </label>
              <label className="form__field">
                <span className="form__label">Verzekerd bedrag Aansprakelijkheid Bedrijven</span>
                <select name="verzekerd_bedrag_ab">
                  <option value="">Kies een optie</option>
                  <option value="€ 1.250.000,00">€ 1.250.000,00</option>
                  <option value="€ 2.500.000,00">€ 2.500.000,00</option>
                  <option value="€ 5.000.000,00">€ 5.000.000,00</option>
                </select>
              </label>
            </div>

            <h2 className="form__section-title">3. Keuzes</h2>
            <div className="form__grid">
              <fieldset className="form__field">
                <legend className="form__label">Meeverzekeren werknemerschade</legend>
                <div className="form__radio-group">
                  <label><input type="radio" name="werknemerschade" value="Ja" /> Ja</label>
                  <label><input type="radio" name="werknemerschade" value="Nee" /> Nee</label>
                </div>
              </fieldset>
              <fieldset className="form__field">
                <legend className="form__label">Maakt de onderneming gebruik van onderaannemers?</legend>
                <div className="form__radio-group">
                  <label><input type="radio" name="onderaannemers" value="Ja" /> Ja</label>
                  <label><input type="radio" name="onderaannemers" value="Nee" /> Nee</label>
                </div>
              </fieldset>
              <fieldset className="form__field form__field--full">
                <legend className="form__label">Opzicht meeverzekeren</legend>
                <div className="form__radio-group form__radio-group--block">
                  <label>
                    <input
                      type="radio"
                      name="opzicht"
                      value="Ja - Opzicht is uitsluitend meeverzekerd op het moment dat de opzicht clausule op de offerte staat. Of als dit expliciet beschreven staat in de bijzondere bepaling."
                    />
                    <span>Ja</span>
                  </label>
                  <label>
                    <input type="radio" name="opzicht" value="Nee" />
                    <span>Nee</span>
                  </label>
                </div>
              </fieldset>
            </div>

            <h2 className="form__section-title">4. Contact</h2>
            <div className="form__grid">
              <label className="form__field">
                <span className="form__label">E-mail *</span>
                <input name="email" type="email" required />
              </label>
              <label className="form__field">
                <span className="form__label">Ingangsdatum</span>
                <input name="ingangsdatum" type="date" lang="nl" />
              </label>
            </div>

            <div className="form__actions">
              <button type="submit" className="form__submit">Aanvraag versturen</button>
              <p className="form__note">
                Met het versturen van dit formulier geef je toestemming om contact met je op te nemen voor een AVB-offerte.
              </p>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AvbFormPage;

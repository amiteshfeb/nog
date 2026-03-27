import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './FormPage.css';

const FormPage = () => {
  return (
    <>
      <Navbar transparent={false} />
      <main className="form-page">
        <header className="form-page__hero">
          <div className="form-page__hero-inner">
            <p className="form-page__eyebrow">Aanvraag</p>
            <h1 className="form-page__title">
              Aanvraagformulier voor Beroeps en bedrijfsaansprakelijkheidsverzekering
            </h1>
            <p className="form-page__subtitle">
              Vul het formulier in en wij nemen zo snel mogelijk contact met je op met een offerte op maat.
            </p>
          </div>
        </header>

        <section className="form-page__content">
          <form
            className="form"
            action="https://formspree.io/f/mjganldn"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Aanvraag BAV/AVB" />

            <h2 className="form__section-title">1. Algemene gegevens</h2>
            <div className="form__grid">
              <label className="form__field">
                <span className="form__label">Voornaam *</span>
                <input name="voornaam" type="text" required />
              </label>
              <label className="form__field">
                <span className="form__label">Achternaam *</span>
                <input name="achternaam" type="text" required />
              </label>
              <label className="form__field form__field--full">
                <span className="form__label">Uw Bedrijfsnaam *</span>
                <input name="bedrijfsnaam" type="text" required />
              </label>
              <label className="form__field">
                <span className="form__label">Uw KVK</span>
                <input name="kvk" type="text" />
              </label>
              <label className="form__field">
                <span className="form__label">Btw-nummer</span>
                <input name="btw" type="text" />
              </label>
              <label className="form__field form__field--full">
                <span className="form__label">Straat *</span>
                <input name="straat" type="text" required />
              </label>
              <label className="form__field">
                <span className="form__label">Postcode *</span>
                <input name="postcode" type="text" required />
              </label>
              <label className="form__field">
                <span className="form__label">Stad *</span>
                <input name="stad" type="text" required />
              </label>
              <label className="form__field">
                <span className="form__label">Telefoon</span>
                <input name="telefoon" type="tel" />
              </label>
              <label className="form__field">
                <span className="form__label">E-mail</span>
                <input name="email" type="email" />
              </label>
              <label className="form__field form__field--full">
                <span className="form__label">Hoe heeft u ons gevonden?</span>
                <select name="hoe_gevonden">
                  <option value="">Selecteer</option>
                  <option value="Zoekmachine (google)">Zoekmachine (google)</option>
                  <option value="Nieuwsbrief New Wave Assurances">Nieuwsbrief New Wave Assurances</option>
                  <option value="Anders">Anders...</option>
                </select>
              </label>
            </div>

            <h2 className="form__section-title">2. Beroep of werkzaamheden</h2>
            <div className="form__grid">
              <label className="form__field form__field--full">
                <span className="form__label">Omschrijving van de werkzaamheden</span>
                <textarea name="werkzaamheden" rows="3" />
              </label>
              <label className="form__field">
                <span className="form__label">Branche of sector</span>
                <input name="branche" type="text" />
              </label>
              <label className="form__field">
                <span className="form__label">Eventuele nevenactiviteiten</span>
                <input name="nevenactiviteiten" type="text" />
              </label>
            </div>

            <h2 className="form__section-title">3. Omzetgegevens</h2>
            <div className="form__grid">
              <label className="form__field form__field--full">
                <span className="form__label">Jaaromzet (geschat of voorgaand jaar)</span>
                <input name="jaaromzet" type="text" />
              </label>
              <label className="form__field form__field--full">
                <span className="form__label">Geplande omzet volgend jaar</span>
                <input name="omzet_volgend_jaar" type="text" />
              </label>
            </div>

            <h2 className="form__section-title">4. Klanten en opdrachten</h2>
            <div className="form__grid">
              <label className="form__field">
                <span className="form__label">Aantal opdrachtgevers per jaar</span>
                <input name="aantal_opdrachtgevers" type="text" />
              </label>
              <label className="form__field">
                <span className="form__label">Type klanten (overheden, particulieren, bedrijven)</span>
                <input name="type_klanten" type="text" />
              </label>
              <fieldset className="form__field form__field--full">
                <legend className="form__label">Werk je voor buitenlandse opdrachtgevers?</legend>
                <div className="form__radio-group">
                  <label><input type="radio" name="buitenlandse_opdrachtgevers" value="Ja" /> Ja</label>
                  <label><input type="radio" name="buitenlandse_opdrachtgevers" value="Nee" /> Nee</label>
                </div>
              </fieldset>
            </div>

            <h2 className="form__section-title">5. Verzekeringswensen</h2>
            <div className="form__grid">
              <label className="form__field">
                <span className="form__label">Gewenst verzekerd bedrag</span>
                <select name="verzekerd_bedrag">
                  <option value="">Selecteer</option>
                  <option value="€250.000">€250.000</option>
                  <option value="€500.000">€500.000</option>
                  <option value="€1.000.000">€1.000.000</option>
                </select>
              </label>
              <label className="form__field">
                <span className="form__label">Eigen risico</span>
                <input name="eigen_risico" type="text" />
              </label>
              <label className="form__field form__field--full">
                <span className="form__label">Dekking (binnen NL, Europa of wereldwijd)</span>
                <input name="dekking_regio" type="text" />
              </label>
            </div>

            <h2 className="form__section-title">6. Schadeverleden</h2>
            <div className="form__grid">
              <fieldset className="form__field">
                <legend className="form__label">Schadeclaim BAV/AVB in afgelopen 5 jaar?</legend>
                <div className="form__radio-group">
                  <label><input type="radio" name="schadeclaim_5jaar" value="Ja" /> Ja</label>
                  <label><input type="radio" name="schadeclaim_5jaar" value="Nee" /> Nee</label>
                </div>
              </fieldset>
              <fieldset className="form__field">
                <legend className="form__label">Ooit geweigerd of polis opgezegd?</legend>
                <div className="form__radio-group">
                  <label><input type="radio" name="polis_geweigerd" value="Ja" /> Ja</label>
                  <label><input type="radio" name="polis_geweigerd" value="Nee" /> Nee</label>
                </div>
              </fieldset>
            </div>

            <div className="form__actions">
              <button type="submit" className="form__submit">Offerte aanvragen</button>
              <p className="form__note">
                Met het versturen van dit formulier geeft u toestemming om contact met u op te nemen voor een offerte.
              </p>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FormPage;

import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const faqItems = [
  {
    question: 'Hoe laag is de premie?',
    answer: (
      <p>
        De premie is afhankelijk van je leeftijd, het verzekerde bedrag en de wachttijd voordat de uitkering start. Omdat dit een budget-AOV is, liggen de premies aanzienlijk lager dan bij traditionele arbeidsongeschiktheidsverzekeringen. Bereken je premie eenvoudig via onze tool!
      </p>
    ),
  },
  {
    question: 'Wanneer gaat de verplichte AOV (Wet BAZ) precies in?',
    answer: (
      <p>
        De volledige uitvoering van de Wet BAZ door het UWV wordt momenteel pas verwacht rond <strong>1 januari 2030</strong>. Hoewel de verplichting dus nog even duurt, is <strong>2026</strong> cruciaal vanwege de verwachte peildatum voor het overgangsrecht.
      </p>
    ),
  },
  {
    question: 'Wat zijn de nadelen van de publieke BAZ-regeling?',
    answer: (
      <p>
        De overheidsregeling is een sober vangnet met een standaard <strong>wachttijd van 2 jaar</strong>. Bovendien wordt je arbeidsongeschiktheid getoetst op basis van ‘gangbare arbeid’: als je nog ander eenvoudig werk kunt doen, krijg je geen uitkering. Bij een private AOV verzeker je meestal je eigen beroep.
      </p>
    ),
  },
  {
    question: 'Wat is de peildatum en waarom is deze belangrijk?',
    answer: (
      <p>
        De peildatum is het moment waarop wordt vastgesteld of je al een eigen private AOV hebt. Als je vóór deze datum (waarschijnlijk begin 2026) een passende verzekering hebt, val je onder het <strong>overgangsrecht</strong>. Je mag dan je eigen, vaak goedkopere polis behouden en hoeft niet over te stappen naar de publieke basisverzekering.
      </p>
    ),
  },
  {
    question: 'Wat gebeurt er als ik weer kan werken?',
    answer: (
      <p>
        Zodra je weer (gedeeltelijk) kunt werken, stopt of wordt de uitkering aangepast aan je nieuwe situatie. Dit hangt af van de mate van arbeidsongeschiktheid en de polisvoorwaarden. In sommige gevallen kun je bij gedeeltelijke arbeidsongeschiktheid nog een deel van de uitkering ontvangen.
      </p>
    ),
  },
  {
    question: 'Wat gaat de verplichte overheids-AOV kosten?',
    answer: (
      <p>
        Volgens de laatste plannen bedraagt de premie voor de BAZ <strong>5,4% van je winst</strong>. Dit is gemaximeerd op ongeveer <strong>€171 per maand</strong> (gebaseerd op het minimumloon). Voor veel zzp’ers in beroepen met een laag risico is een private Budget AOV aanzienlijk voordeliger.
      </p>
    ),
  },
  {
    question: 'Wat is de wachttijd voordat ik een uitkering ontvang?',
    answer: (
      <p>
        De wachttijd (ook wel eigen risico periode genoemd) is de periode vanaf het moment dat je arbeidsongeschikt raakt tot het moment dat de uitkering start. Bij onze budget-AOV kun je kiezen uit verschillende wachttijden, zoals 30, 60 of 90 dagen. Hoe langer de wachttijd, hoe lager de premie.
      </p>
    ),
  },
  {
    question: 'Is er een medische keuring nodig?',
    answer: (
      <p>
        Voor onze budget-AOV is meestal geen uitgebreide medische keuring nodig. Je vult bij de aanvraag een gezondheidsverklaring in, en in sommige gevallen kan er een extra beoordeling plaatsvinden.
      </p>
    ),
  },
  {
    question: 'Wat wordt er gedekt?',
    answer: (
      <p>
        Onze budget-AOV biedt een basisinkomen als je door ziekte of een ongeval niet kunt werken. De dekking verschilt per polis, maar over het algemeen ontvang je een maandelijkse uitkering tot het afgesproken bedrag, zolang je arbeidsongeschikt bent en voldoet aan de polisvoorwaarden.
      </p>
    ),
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [highlightAnimated, setHighlightAnimated] = useState(false);
  const headingRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__heading" ref={headingRef}>
          Vragen? Wij hebben <span className={`faq__highlight${highlightAnimated ? ' faq__highlight--animate' : ''}`}>antwoorden</span>.
        </h2>

        <div className="faq__list">
          {faqItems.map((item, i) => (
            <div
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              key={i}
            >
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{item.question}</span>
                <span className="faq__icon">{openIndex === i ? '\u2212' : '+'}</span>
              </button>
              <div className="faq__answer">
                <div className="faq__answer-inner">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

import React, { useState, useEffect, useRef } from 'react';
import './Blog.css';

export const blogPosts = [
  {
    slug: 'de-verplichte-aov-wet-baz-waarom-2026-beslissend-is',
    category: 'AOV 2026',
    title: 'De Verplichte AOV (Wet BAZ) – waarom 2026 beslissend is',
    snippet:
      'Wet BAZ komt pas in 2030, maar de peildatum in 2026 bepaalt of je onder overgangsrecht valt en je eigen, vaak voordeligere polis mag houden.',
    image: '/blog-1.png',
    link: '/blog/de-verplichte-aov-wet-baz-waarom-2026-beslissend-is',
    content: [
      { heading: 'Waarom 2026 belangrijk is', body: ['De peildatum bepaalt of je onder overgangsrecht valt.'] },
    ],
  },
  {
    slug: 'aov-2026-private-flexibiliteit-vs-publiek-vangnet',
    category: 'AOV 2026',
    title: 'AOV in 2026: private flexibiliteit vs. publiek vangnet',
    snippet:
      'Eigen beroep verzekerd, kortere wachttijd en fiscale aftrek in 2026. Het verschil met de publieke basisverzekering is groter dan je denkt.',
    image: '/blog-2.png',
    link: '/blog/aov-2026-private-flexibiliteit-vs-publiek-vangnet',
    content: [
      { heading: 'Private flexibiliteit', body: ['Eigen beroep verzekerd en kortere wachttijden.'] },
    ],
  },
  {
    slug: 'beroepsaansprakelijkheid-onmisbaar-in-2026',
    category: 'BAV',
    title: 'Beroepsaansprakelijkheid: onmisbaar in 2026',
    snippet:
      'De BAV dekt zuivere vermogensschade door beroepsfouten. Steeds vaker een harde contracteis bij grote opdrachtgevers en overheid.',
    image: '/blog-3.png',
    link: '/blog/beroepsaansprakelijkheid-onmisbaar-in-2026',
    content: [
      { heading: 'Waarom BAV', body: ['Beschermt tegen vermogensschade door beroepsfouten.'] },
    ],
  },
  {
    slug: 'bedrijfaansprakelijkheid-schade-aan-spullen-en-personen',
    category: 'AVB',
    title: 'Bedrijfsaansprakelijkheid: schade aan spullen en personen',
    snippet:
      'AVB dekt materiële schade en letsel die je veroorzaakt tijdens je werk. Essentieel signaal tegen schijnzelfstandigheid in 2026.',
    image: '/blog-4.png',
    link: '/blog/bedrijfaansprakelijkheid-schade-aan-spullen-en-personen',
    content: [
      { heading: 'AVB dekking', body: ['Dekt materiële schade en letsel door je werkzaamheden.'] },
    ],
  },
  {
    slug: 'verzekeringspakket-voor-zzpers-in-2026',
    category: 'Zzp totaalpakket',
    title: 'Het verzekeringspakket voor zzp’ers in 2026',
    snippet:
      'Welke dekkingen heb je echt nodig? Combineer AOV, BAV en AVB slim en bespaar zonder in te leveren op zekerheid.',
    image: '/blog-5.png',
    link: '/blog/verzekeringspakket-voor-zzpers-in-2026',
    content: [
      { heading: 'Slim combineren', body: ['AOV, BAV en AVB samen voor optimale dekking.'] },
    ],
  },
];

function getCardsVisible() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function getCardGap() {
  if (window.innerWidth <= 640) return 0;
  if (window.innerWidth <= 1024) return 24;
  return 32;
}

function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible());
  const [highlightAnimated, setHighlightAnimated] = useState(false);
  const totalPages = blogPosts.length - cardsVisible + 1;
  const intervalRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      const newCardsVisible = getCardsVisible();
      setCardsVisible(newCardsVisible);
      setCurrentPage(0);
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector('.blog__card');
        if (firstCard) setSlideWidth(firstCard.offsetWidth + getCardGap());
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentPage((prev) => {
        const pages = blogPosts.length - getCardsVisible() + 1;
        return prev >= pages - 1 ? 0 : prev + 1;
      });
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
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

  const goTo = (page) => {
    setCurrentPage(page);
    startAutoplay();
  };

  return (
    <section className="blog">
      <div className="blog__container">
        <h2 className="blog__heading" ref={headingRef}>
          Wil je meer weten? Check onze <span className={`blog__highlight${highlightAnimated ? ' blog__highlight--animate' : ''}`}>blog</span>!
        </h2>

        <div className="blog__carousel">
          <div
            className="blog__track"
            ref={trackRef}
            style={{ transform: `translateX(-${currentPage * slideWidth}px)` }}
          >
            {blogPosts.slice(0, 6).map((post, i) => (
              <article className="blog__card" key={i}>
                <div className="blog__image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog__content">
                  <span className="blog__category">{post.category}</span>
                  <h3 className="blog__title">{post.title}</h3>
                  <p className="blog__snippet">{post.snippet}</p>
                  <a className="blog__read-more" href={post.link || '#'}>Lees meer</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="blog__dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`blog__dot${currentPage === i ? ' blog__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

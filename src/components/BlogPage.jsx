import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogPage.css';
import { blogPosts } from './Blog';

function BlogPage() {
  const path = window.location.pathname;
  const slug = path.replace(/^\/blog\/?/, '') || blogPosts[0]?.slug;
  const article = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <>
      <Navbar transparent={false} />
      <main className="blog-page">
        <section className="blog-page__hero">
          <div className="blog-page__hero-inner">
            <p className="blog-page__eyebrow">Kennis &amp; inspiratie</p>
            <h1 className="blog-page__title">{article.title}</h1>
            <p className="blog-page__subtitle">
              {article.snippet ||
                'Lees het volledige artikel met praktische uitleg en voorbeelden.'}
            </p>
          </div>
        </section>

        <section className="blog-page__content">
          {article.image && (
            <div className="blog-page__image">
              <img src={article.image} alt={article.title} />
            </div>
          )}
          <div className="blog-page__body">
            {(article.content || []).map((section, idx) => (
              <div className="blog-page__section" key={idx}>
                <h2>{section.heading}</h2>
                {Array.isArray(section.body)
                  ? section.body.map((para, i) => <p key={i}>{para}</p>)
                  : <p>{section.body}</p>}
              </div>
            ))}
            {!article.content && (
              <p>
                Het volledige artikel komt hier te staan. Voeg content toe aan de
                <code>blogPosts</code>-data in <code>Blog.jsx</code>.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;

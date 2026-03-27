import React, { useState } from 'react';
import './HelpSection.css';

const tabs = [
  {
    id: 'whatsapp',
    icon: '💬',
    label: 'Whatsapp',
    content: 'Wij beantwoorden je vragen van maandag t/m vrijdag van 09:00 tot 18:00.',
    link: 'Stuur een bericht',
    href: 'https://wa.me/31617458939',
  },
  {
    id: 'email',
    icon: '✉️',
    label: 'E-mail',
    content: 'E-mail ons 24/7 op info@nog-gemakkelijker.nl. We reageren zo snel mogelijk.',
    link: 'Mail ons',
    href: 'mailto:info@nog-gemakkelijker.nl',
  },
  {
    id: 'telefoon',
    icon: '📞',
    label: 'Telefoon',
    content: 'Bel ons maandag t/m vrijdag van 09:00 tot 18:00 op +31 85 401 4776.',
    link: 'Bel ons',
    href: 'tel:+31854014776',
  },
];

const teamPhotos = [
  { name: 'Bart', src: '/help-photo-3.png', size: 'small' },
  { name: 'Shelby', src: '/help-photo.png', size: 'large' },
  { name: 'Lin', src: '/help-photo-2.png', size: 'medium' },
  { name: 'Thomas', src: '/help-photo-5.png', size: 'medium' },
  { name: 'Lisa', src: '/help-photo-6.png', size: 'small' },
  { name: 'Martijn', src: '/help-photo-4.png', size: 'medium' },
];

const HelpSection = () => {
  const [activeTab, setActiveTab] = useState('whatsapp');
  const active = tabs.find(t => t.id === activeTab);

  return (
    <section className="help-section">
      <div className="help-section__container">
        <div className="help-section__content">
          <h2 className="help-section__heading">We helpen je graag!</h2>
          <p className="help-section__text">
            Ons team van verzekeringsexperts staat voor klaar. En we beloven: geen papierwerk, lange wachttijden of ingewikkeld jargon.
          </p>
          <div className="help-section__tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`help-section__tab${activeTab === tab.id ? ' help-section__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="help-section__tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          {active && (
            <div className="help-section__tab-content">
              <p>{active.content}</p>
              <a
                href={active.href || '#'}
                className="help-section__tab-link"
                target={active.href && active.href.startsWith('http') ? '_blank' : undefined}
                rel={active.href && active.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {active.link}
              </a>
            </div>
          )}
        </div>
        <div className="help-section__photos">
          {teamPhotos.map((photo, index) => (
            <div key={index} className={`help-section__photo help-section__photo--${photo.size} help-section__photo--pos${index}`}>
              <img src={photo.src} alt={photo.name} />
              <span className="help-section__photo-name">{photo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;

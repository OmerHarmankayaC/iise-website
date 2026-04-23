import React from 'react';
import { T, rich } from '../utils';

export default function Events({ lang, full }) {
  const t = T()[lang].events;
  const items = full ? t.items : t.items.slice(0, 5);
  return (
    <section id="events-section" className="section section-events">
      <div className="section-wrap">
        <span className="kicker">{t.kicker}</span>
        <h2 className="section-title">{rich(t.title)}</h2>

        <div className="events-ledger">
          {items.map((e, i) => (
            <div className="event-row" key={i}>
              <span className="event-idx">№ {String(i+1).padStart(2, "0")}</span>
              <div className="event-date-box">
                <span className="d">{e.date}</span>
                <span className="m">{e.month}</span>
              </div>
              <div className="event-info">
                <h3>{e.title}</h3>
                <span className="where">✦ {e.where}</span>
              </div>
              <span className="event-tag">{e.tag}</span>
              <span className="event-arrow">→</span>
            </div>
          ))}
        </div>
        <div className="events-note">※ {t.placeholderNote}</div>
      </div>
    </section>
  );
}

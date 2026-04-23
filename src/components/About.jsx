import React from 'react';
import { T, rich } from '../utils';

export default function About({ lang }) {
  const t = T()[lang].about;
  return (
    <section id="about" className="section">
      <div className="section-wrap">
        <span className="kicker">{t.kicker}</span>
        <h2 className="section-title">{rich(t.title)}</h2>

        <div className="about-layout">
          <div className="about-copy">
            {t.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-notes">
            "{t.pullquote}"
            <span className="sig">— {t.pullsig}</span>
          </div>
        </div>

        <div className="pillars">
          {t.pillars.map((p, i) => (
            <div className="pillar-card" key={i}>
              <span className="pillar-tag">{String(i+1).padStart(2,"0")} · {p.tag}</span>
              <h3 className="pillar-title">{rich(p.t)}</h3>
              <p className="pillar-desc">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

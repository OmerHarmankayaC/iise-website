import React from 'react';
import { T, rich } from '../utils';

export default function Team({ lang, full }) {
  const t = T()[lang].team;
  const roles = full ? t.roles : t.roles.slice(0, 4);
  return (
    <section id="team" className="section">
      <div className="section-wrap">
        <span className="kicker">{t.kicker}</span>
        <h2 className="section-title">{rich(t.title)}</h2>
        <p className="section-body">{t.intro}</p>
        <div className="team-leader-note">✦ {t.note}</div>

        <div className="team-board">
          {roles.map((r, i) => {
            const isOpen = r.name === "—";
            const initial = isOpen ? "?" : r.name.trim()[0];
            return (
              <div className={`polaroid ${isOpen ? "open" : ""}`} key={i}>
                <div className="polaroid-photo" data-label={isOpen ? t.openLabel : "photo / 2025"}>
                  <div className="polaroid-photo-pattern" />
                  <div className="mono">{initial}</div>
                </div>
                <div className="polaroid-role">{r.role}</div>
                <div className="polaroid-name">{isOpen ? t.openPositions : r.name}</div>
                <p className="polaroid-bio">{r.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

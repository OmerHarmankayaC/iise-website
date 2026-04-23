import React, { useState } from 'react';
import { T, rich } from '../utils';

export default function FAQ({ lang }) {
  const t = T()[lang].faq;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="section-wrap">
        <span className="kicker">{t.kicker}</span>
        <h2 className="section-title">{rich(t.title)}</h2>
        <div className="faq-list">
          {t.items.map((it, i) => (
            <div className={`faq-card ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="n">{String(i+1).padStart(2,"0")}</span>
                <span className="qtext">{it.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

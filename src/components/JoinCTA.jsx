import React from 'react';
import { T, rich } from '../utils';

export default function JoinCTA({ lang }) {
  const t = T()[lang].join;
  return (
    <section id="join" className="section-join">
      <div className="section-wrap">
        <span className="kicker">{t.kicker}</span>
        <div className="join-grid">
          <div>
            <h2 className="section-title">{rich(t.title)}</h2>
            <p className="join-body">{t.body}</p>
            <div style={{marginTop: 36, display:"flex", gap:14, flexWrap:"wrap"}}>
              <a href="#" className="btn solid-red" onClick={(e)=>e.preventDefault()}>{t.cta} <span className="arr">→</span></a>
              <a href="#contact-section" className="btn ghost-cream"
                 onClick={(e)=>{e.preventDefault();document.getElementById("contact-section")?.scrollIntoView({behavior:"smooth"});}}>
                 {t.secondary} <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="join-stub">
            <h4>{t.stubTitle}</h4>
            <ul className="join-perks">
              {t.perks.map((p, i) => (
                <li key={i}><span className="num">0{i+1}</span><span>{p}</span></li>
              ))}
            </ul>
            <div style={{fontFamily:"var(--script)", fontSize: 22, color: "var(--ted-red)", textAlign:"right"}}>
              {t.tearOff} ✂
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

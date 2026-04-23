import React from 'react';
import { T, rich } from '../utils';

export default function Hero({ lang }) {
  const t = T()[lang].hero;
  const m = T()[lang].meta;
  return (
    <section className="hero">
      <div className="hero-wrap">
        <div className="hero-head">
          <span className="iss-no"><strong>№ 01</strong> · {t.issue}</span>
          <span style={{textAlign:"center"}}>{m.estLabel}</span>
          <span>{t.freeStamp}</span>
        </div>

        <div className="hero-no">01<small>/{new Date().getFullYear()}</small></div>

        <h1 className="hero-title">
          {t.line1}<br/>
          <em>{t.line2}</em><br/>
          <span className="redbar">{t.line3}</span>
        </h1>

        <img src="/tedu-illustration.png" alt="TEDU Illustration" className="hero-illustration" />

        <div className="hero-meta-row">
          <p className="lede">{rich(t.lede)}</p>
          <div className="hero-side">
            <div className="block">
              <h5>{t.sideA}</h5>
              {m.uni}<br/>{m.depLabel}<br/>Çankaya · Ankara
            </div>
            <div className="block">
              <h5>{t.sideB}</h5>
              {t.sideBbody}
            </div>
          </div>
        </div>

        <div className="hero-cta-row">
          <a href="#join" className="btn solid-red"
             onClick={(e)=>{e.preventDefault();document.getElementById("join")?.scrollIntoView({behavior:"smooth"});}}>
             {t.ctaPrimary} <span className="arr">→</span>
          </a>
          <a href="#events-section" className="btn"
             onClick={(e)=>{e.preventDefault();document.getElementById("events-section")?.scrollIntoView({behavior:"smooth"});}}>
             {t.ctaSecondary} <span className="arr">→</span>
          </a>
          <span className="hero-ps">{t.ps}</span>
        </div>
      </div>
    </section>
  );
}

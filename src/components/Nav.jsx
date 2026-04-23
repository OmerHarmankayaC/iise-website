import React from 'react';
import { T } from '../utils';
import tedLogo from '../assets/ted_logo_circular.png';
import iiseLogo from '../assets/iise-logo.png';

export default function Nav({ lang, setLang, page, setPage }) {
  const t = T()[lang];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
          <div className="nav-logos">
            <img src={iiseLogo} alt="IISE" className="nav-iise-logo" />
            <span className="nav-logo-div" />
            <img src={tedLogo} alt="TED University" className="nav-ted-logo" />
          </div>
          <span className="sub">{t.meta.chapterLabel}</span>
        </a>
        <div className="nav-links">
          {[
            ["home", t.nav.about, "about"],
            ["events", t.nav.events, null],
            ["team", t.nav.team, null],
            ["home", t.nav.join, "join"],
            ["home", t.nav.faq, "faq"],
            ["contact", t.nav.contact, null],
          ].map(([pg, label, anchor], i) => (
            <a key={i} href="#"
               aria-current={page === pg && !anchor ? "true" : undefined}
               onClick={(e) => {
                 e.preventDefault();
                 setPage(pg);
                 if (anchor) setTimeout(() => {
                   document.getElementById(anchor)?.scrollIntoView({behavior:"smooth", block:"start"});
                 }, 80);
               }}>{label}</a>
          ))}
        </div>
        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
            <button aria-pressed={lang === "tr"} onClick={() => setLang("tr")}>TR</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

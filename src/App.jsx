import React, { useState, useEffect } from 'react';
import './index.css';

// Import our new components
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import JoinCTA from './components/JoinCTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// The Tweaks config constants from Tweaks.jsx
import { COLORS, TWEAK_DEFAULTS } from './components/Tweaks';

function useLang() {
  const [lang, setLang] = useState(() => {
    const s = localStorage.getItem("iise_lang");
    if (s) return s;
    return (navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en";
  });
  useEffect(() => {
    localStorage.setItem("iise_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}

function usePage() {
  const [page, setPage] = useState(() => localStorage.getItem("iise_page") || "home");
  useEffect(() => {
    localStorage.setItem("iise_page", page);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);
  return [page, setPage];
}

function HomePage({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <Events lang={lang} full={false} />
      <JoinCTA lang={lang} />
      <FAQ lang={lang} />
    </>
  );
}

function App() {
  const [lang, setLang] = useLang();
  const [page, setPage] = usePage();
  
  // Freezing tweaks settings to TWEAK_DEFAULTS for Production
  const tweaks = TWEAK_DEFAULTS;

  useEffect(() => {
    // Apply background texture
    document.body.style.backgroundImage =
      tweaks.bgTexture === "dots"
        ? "radial-gradient(rgba(26,26,26,0.12) 1.5px, transparent 1.5px)"
        : tweaks.bgTexture === "plain"
        ? "none"
        : "radial-gradient(rgba(26,26,26,0.06) 1.5px, transparent 1.5px), radial-gradient(rgba(26,26,26,0.03) 1px, transparent 1px)";
    document.body.style.backgroundSize = tweaks.bgTexture === "dots" ? "24px 24px" : "30px 30px, 15px 15px";
    document.body.style.backgroundAttachment = "scroll";
    document.body.dataset.motion = tweaks.motion;

    // Apply colorway
    const c = COLORS.find(x => x.id === tweaks.colorway) || COLORS[0];
    const r = document.documentElement.style;
    r.setProperty("--iise-blue", c.blue);
    r.setProperty("--iise-blue-deep", c.blueDeep);
    r.setProperty("--ted-red", c.red);
    r.setProperty("--ted-red-warm", c.redWarm);
  }, [tweaks]);

  let Page = HomePage;
  if (page === "events") Page = (p) => <Events {...p} full={true} />;
  else if (page === "team") Page = (p) => <Team {...p} full={true} />;
  else if (page === "contact") Page = Contact;

  return (
    <>
      <Nav lang={lang} setLang={setLang} page={page} setPage={setPage} />
      <main data-screen-label={page}>
        <Page lang={lang} />
      </main>
      <Footer lang={lang} setPage={setPage} />
    </>
  );
}

export default App;

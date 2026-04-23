const { useState, useEffect } = React;
const T = () => window.__I18N__;

// Parse inline markers in strings: [em]...[/em] → italic colored, [hl]...[/hl] → highlighted
function rich(str) {
  if (!str) return null;
  const parts = [];
  const re = /\[(em|hl)\]([\s\S]*?)\[\/\1\]/g;
  let last = 0, m, i = 0;
  while ((m = re.exec(str)) !== null) {
    if (m.index > last) parts.push(str.slice(last, m.index));
    if (m[1] === "em") parts.push(<em key={i++}>{m[2]}</em>);
    else parts.push(<span key={i++} className="highlight">{m[2]}</span>);
    last = m.index + m[0].length;
  }
  if (last < str.length) parts.push(str.slice(last));
  return parts;
}

const COLORS = [
  { id: "classic",  blue:"#1a3a8f", blueDeep:"#0d2563", red:"#c8102e", redWarm:"#d93f3a" },
  { id: "ocean",    blue:"#0f4c81", blueDeep:"#083251", red:"#e63946", redWarm:"#f76c6c" },
  { id: "ink",      blue:"#142850", blueDeep:"#0a1a3a", red:"#b33030", redWarm:"#cc4444" },
  { id: "royal",    blue:"#273c75", blueDeep:"#192a5a", red:"#c23616", redWarm:"#e0552f" },
  { id: "cobalt",   blue:"#0a2463", blueDeep:"#061845", red:"#d8315b", redWarm:"#e85178" },
];

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

function TopMarquee({ lang }) {
  const t = T()[lang].marquee;
  const items = Array(6).fill(t);
  return (
    <div className="topbar">
      <div className="topbar-track">
        {items.map((x, i) => <span key={i}>{x}</span>)}
      </div>
    </div>
  );
}

function Nav({ lang, setLang, page, setPage }) {
  const t = T()[lang];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
          <span className="nav-brand-seal">i</span>
          <span className="nav-brand-text">
            <span>IISE <em style={{fontStyle:"italic", color:"var(--ted-red)"}}>TEDU</em></span>
            <span className="sub">{t.meta.chapterLabel}</span>
          </span>
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

function Hero({ lang }) {
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

        {/* hero-no moved inside .hero-wrap for relative positioning */}

        <div className="stamp">
          {t.stampTop}
          <small>{t.stampBottom}</small>
        </div>

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

function About({ lang }) {
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

function Events({ lang, full }) {
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

function Team({ lang, full }) {
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

function JoinCTA({ lang }) {
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

function FAQ({ lang }) {
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

function Contact({ lang }) {
  const t = T()[lang].contact;
  const [sent, setSent] = useState(false);
  return (
    <section id="contact-section" className="section">
      <div className="section-wrap">
        <span className="kicker">{t.kicker}</span>
        <h2 className="section-title">{rich(t.title)}</h2>
        <p className="section-body">{t.body}</p>

        <div className="contact-grid">
          <div className="contact-card">
            <h4>{t.cardTitle}</h4>
            <div className="contact-row"><span className="k">{t.labels.addr}</span><span className="v">{t.addr}</span></div>
            <div className="contact-row"><span className="k">{t.labels.email}</span><span className="v">{t.email}</span></div>
            <div className="contact-row"><span className="k">Instagram</span><span className="v">{t.ig}</span></div>
            <div className="contact-row"><span className="k">LinkedIn</span><span className="v">{t.li}</span></div>
          </div>
          <form className="contact-form" onSubmit={(e)=>{e.preventDefault();setSent(true);setTimeout(()=>setSent(false),4000);}}>
            <div className="field">
              <label>{t.fields.name}</label>
              <input required placeholder={t.placeholders.name} />
            </div>
            <div className="field">
              <label>{t.fields.email}</label>
              <input type="email" required placeholder={t.placeholders.email} />
            </div>
            <div className="field full">
              <label>{t.fields.subject}</label>
              <select required defaultValue="">
                <option value="" disabled>{t.placeholders.subject}</option>
                {t.subjects.map((s, i) => <option key={i}>{s}</option>)}
              </select>
            </div>
            <div className="field full">
              <label>{t.fields.message}</label>
              <textarea required placeholder={t.placeholders.message}></textarea>
            </div>
            <div className="submit-row">
              <button type="submit" className="btn solid-blue">{t.fields.submit} <span className="arr">→</span></button>
              <span className={`form-success ${sent ? "show" : ""}`}>✓ {t.success}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang, setPage }) {
  const t = T()[lang].footer;
  const nav = T()[lang].nav;
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-big">IISE <em>TEDU</em></div>
        <div className="footer-cols">
          <div>
            <h5>{t.colAbout}</h5>
            <p>{t.aboutBody}</p>
          </div>
          <div>
            <h5>{t.colNav}</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();setPage("home");}}>{nav.about}</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();setPage("events");}}>{nav.events}</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();setPage("team");}}>{nav.team}</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();setPage("contact");}}>{nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h5>{t.colConnect}</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="mailto:iise@tedu.edu.tr">iise@tedu.edu.tr</a></li>
            </ul>
          </div>
          <div>
            <h5>{t.colMore}</h5>
            <ul>
              <li><a href="https://www.iise.org" target="_blank" rel="noreferrer">iise.org ↗</a></li>
              <li><a href="https://www.tedu.edu.tr" target="_blank" rel="noreferrer">tedu.edu.tr ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <span>{t.copy}</span>
          <span>{t.designed}</span>
        </div>
      </div>
    </footer>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bgTexture":"grid",
  "motion":"on",
  "colorway":"classic"
}/*EDITMODE-END*/;

function Tweaks({ tweaks, set, visible, onClose }) {
  return (
    <div className={`tweaks ${visible ? "show" : ""}`}>
      <h3>TWEAKS <button onClick={onClose}>×</button></h3>
      <div className="tweak-row">
        <span className="lbl">Background</span>
        <div className="seg">
          {[["grid","Grid"],["dots","Dots"],["plain","Plain"]].map(([v,l])=> (
            <button key={v} aria-pressed={tweaks.bgTexture === v} onClick={()=>set("bgTexture", v)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <span className="lbl">Motion</span>
        <div className="seg">
          {[["on","On"],["off","Off"]].map(([v,l])=> (
            <button key={v} aria-pressed={tweaks.motion === v} onClick={()=>set("motion", v)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <span className="lbl">Colorway</span>
        <div className="swatches">
          {COLORS.map(c => (
            <button key={c.id} aria-pressed={tweaks.colorway === c.id}
              onClick={()=>set("colorway", c.id)}
              title={c.id}
              style={{ background: `linear-gradient(135deg, ${c.blue} 0 60%, ${c.red} 60% 100%)` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage({ lang }) {
  return <>
    <Hero lang={lang} />
    <About lang={lang} />
    <Events lang={lang} full={false} />
    <JoinCTA lang={lang} />
    <FAQ lang={lang} />
  </>;
}

function App() {
  const [lang, setLang] = useLang();
  const [page, setPage] = usePage();
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweaksVisible, setTweaksVisible] = useState(false);

  useEffect(() => {
    // bg texture
    document.body.style.backgroundImage =
      tweaks.bgTexture === "dots"
        ? "radial-gradient(rgba(26,26,26,0.12) 1px, transparent 1px)"
        : tweaks.bgTexture === "plain"
        ? "none"
        : "radial-gradient(rgba(26,26,26,0.04) 1px, transparent 1px), radial-gradient(rgba(26,26,26,0.025) 1px, transparent 1px)";
    document.body.style.backgroundSize = tweaks.bgTexture === "dots" ? "18px 18px" : "5px 5px, 3px 3px";
    document.body.dataset.motion = tweaks.motion;

    const c = COLORS.find(x => x.id === tweaks.colorway) || COLORS[0];
    const r = document.documentElement.style;
    r.setProperty("--iise-blue", c.blue);
    r.setProperty("--iise-blue-deep", c.blueDeep);
    r.setProperty("--ted-red", c.red);
    r.setProperty("--ted-red-warm", c.redWarm);
  }, [tweaks]);

  useEffect(() => {
    const h = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksVisible(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksVisible(false);
    };
    window.addEventListener("message", h);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", h);
  }, []);

  const set = (k, v) => {
    setTweaks(prev => {
      const next = { ...prev, [k]: v };
      window.parent.postMessage({ type:"__edit_mode_set_keys", edits:{ [k]: v }}, "*");
      return next;
    });
  };

  let Page = HomePage;
  if (page === "events") Page = (p) => <Events {...p} full={true} />;
  else if (page === "team") Page = (p) => <Team {...p} full={true} />;
  else if (page === "contact") Page = Contact;

  return (
    <>
      <TopMarquee lang={lang} />
      <Nav lang={lang} setLang={setLang} page={page} setPage={setPage} />
      <main data-screen-label={page}>
        <Page lang={lang} />
      </main>
      <Footer lang={lang} setPage={setPage} />
      <Tweaks tweaks={tweaks} set={set} visible={tweaksVisible} onClose={()=>setTweaksVisible(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

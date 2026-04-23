import React, { useState } from 'react';
import { T, rich } from '../utils';

export default function Contact({ lang }) {
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

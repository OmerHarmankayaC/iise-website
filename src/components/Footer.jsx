import React from 'react';
import { T } from '../utils';
import tedLogo from '../assets/ted_logo_circular.png';
import iiseLogo from '../assets/iise-logo.png';

export default function Footer({ lang, setPage }) {
  const t = T()[lang].footer;
  const nav = T()[lang].nav;
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-big">IISE <em>TEDU</em></div>
        <div className="footer-cols">
          <div>
            <h5>{t.colAbout}</h5>
            <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:14}}>
              <img src={iiseLogo} alt="IISE" style={{height:28, width:"auto", objectFit:"contain", filter:"brightness(0) invert(1) opacity(0.85)"}} />
              <img src={tedLogo} alt="TED University" style={{height:28, width:28, objectFit:"cover", borderRadius:"50%"}} />
            </div>
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

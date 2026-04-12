import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="basvuru">
      <div className="footer-cta-section">
        <div className="container footer-cta-container">
          <div className="footer-cta-content">
            <h2 className="footer-cta-title">Sormak istediğin bir şey mi var?</h2>
            <p className="footer-cta-desc">Başvuru süreci, kulübün planları veya aklına takılan her şey için doğrudan yazabilirsin.</p>
            <div className="footer-actions">
              <a href="https://forms.gle/YhdiwVAXwymGQ6MQ9" target="_blank" rel="noopener noreferrer" className="btn btn-yellow">Başvuru Yap</a>
              <a href="mailto:omer.harmankaya@tedu.edu.tr" className="btn btn-outline">omer.harmankaya@tedu.edu.tr</a>
            </div>
          </div>
          <div className="footer-cta-image">
            <img src="/ie-two.jpg" alt="IISE Team" />
          </div>
        </div>
      </div>


      <div className="footer-bottom-section">
        <div className="container footer-bottom">
          <div className="footer-left">
            <strong className="footer-brand">IISE TEDU</strong>
            <p>&copy; 2026 IISE Student Chapter at TED University.<br />Mühendislik ile daha iyi bir dünya için.</p>
          </div>
          <div className="footer-links">
            <a href="mailto:omer.harmankaya@tedu.edu.tr">omer.harmankaya@tedu.edu.tr</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

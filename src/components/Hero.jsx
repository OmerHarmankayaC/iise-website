import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Decorative background elements */}
      <div className="hero-decor decor-1"></div>
      <div className="hero-decor decor-2"></div>
      
      <div className="container hero-container">

        <div className="hero-left">
          <div className="hero-pill">BAŞVURULAR AÇIK</div>
          <h1 className="hero-title">TEDÜ IISE Öğrenci Kolu Kuruluyor</h1>
          <p className="hero-subtitle">
            TEDU'da endüstri mühendisliği öğrencilerini bir araya getiren bir topluluk kuruyoruz. Birlikte öğrenmek, etkinlikler düzenlemek ve alanımıza dair bir şeyler üretmek isteyen herkese açık.
          </p>
          <div className="hero-actions">
            <a href="https://forms.gle/YhdiwVAXwymGQ6MQ9" target="_blank" rel="noopener noreferrer" className="btn btn-blue hero-btn">
              Başvurunu Yap
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src="/tedu-illustration.png" alt="TEDU Illustration" className="hero-main-img illustration" />
            <div className="hero-floating-card">
              <div className="hero-floating-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="hero-floating-text">
                <strong>Kurucu Ekip</strong>
                <span>Başvurular kapanmadan yerini al</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>

  );
};

export default Hero;

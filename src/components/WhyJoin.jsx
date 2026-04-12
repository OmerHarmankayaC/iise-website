import React from 'react';
import './WhyJoin.css';

const WhyJoin = () => {
  return (
    <section id="avantajlar" className="why-join">
      <div className="container">
        <div className="wj-grid">
          {/* Column 1 */}
          <div className="wj-col">
            <div className="wj-card wj-blue-dark">
              <h2>Neden şimdi?</h2>
              <p>Çünkü bir kulübün ilk üyesi olmak, sonradan katılmaktan farklı. Nasıl şekilleneceğine, ne tür etkinlikler yapacağımıza, neyin işe yarayıp neyin yaramadığına birlikte karar veriyoruz.</p>
              <div className="wj-stats">
                <div className="wj-stat">
                  <strong>Sıfırdan</strong>
                  <span>KURUYORUZ</span>
                </div>
                <div className="wj-stat">
                  <strong>Seninle</strong>
                  <span>ŞEKİLLENİYOR</span>
                </div>
              </div>
            </div>

            <div className="wj-card wj-blue-light">
              <h3>Kurucu ekipte ne var?</h3>
              <ul className="wj-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Kulübün yönünü belirlemede söz hakkı
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Aynı alanda düşünen TEDU öğrencileriyle tanışma
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Etkinlik ve organizasyon yönetimi deneyimi
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="wj-col">
            <div className="wj-image wj-img-lab">
              <img src="/computer-calendar-ie.jpg" alt="Planlama" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyJoin;

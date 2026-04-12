import React from 'react';
import './Pillars.css';

const Pillars = () => {
  return (
    <section id="hakkimizda" className="pillars">
      <div className="container">

        <div className="pillars-header">
          <div className="pillars-header-content">
            <p className="kicker">GELECEK VİZYONU</p>
            <h2 className="pillars-title">Chapter Olarak Planladıklarımız & Kazanımlar</h2>
          </div>
          
          <div className="pillars-highlight-badge">
            <div className="badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className="badge-text">
              <strong>Türkiye'de ilk</strong>
              <span>TEDÜ, Türkiye'de fiilen aktif ilk IISE student chapter olma hedefinde.</span>
            </div>
          </div>
        </div>

        <div className="pillars-grid-v2">
          {/* Item 1 */}
          <div className="pillar-item">
            <div className="item-icon icon-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className="item-content">
              <h3>Dönemlik toplantılar</h3>
              <p>Her yarıyılda sektörden konuşmacılar, kariyer panelleri ve teknik sunumlar.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="pillar-item">
            <div className="item-icon icon-yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            </div>
            <div className="item-content">
              <h3>Sektör gezileri</h3>
              <p>Yılda en az bir üretim veya lojistik tesisi ziyareti.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="pillar-item">
            <div className="item-icon icon-gray">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 0 1 0 20"/></svg>
            </div>
            <div className="item-content">
              <h3>Konferanslar</h3>
              <p>IISE bölgesel ve uluslararası konferanslarına öğrenci katılımı.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="pillar-item">
            <div className="item-icon icon-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <div className="item-content">
              <h3>Yarışmalar</h3>
              <p>IISE'nin teknik makale, simülasyon ve tasarım yarışmaları.</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="pillar-item">
            <div className="item-icon icon-yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div className="item-content">
              <h3>Sertifika eğitimleri</h3>
              <p>Six Sigma ve Lean Green Belt gibi sertifikalara üyelere indirimli erişim.</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="pillar-item">
            <div className="item-icon icon-gray">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/></svg>
            </div>
            <div className="item-content">
              <h3>Uluslararası ağ</h3>
              <p>Dünya genelindeki endüstri mühendisliği öğrencileri ve profesyonelleriyle networking.</p>
            </div>
          </div>

          {/* Item 7 */}
          <div className="pillar-item">
            <div className="item-icon icon-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <div className="item-content">
              <h3>Kariyer fırsatları</h3>
              <p>IISE'nin iş ilanları, staj fırsatları ve burs programlarına erişim.</p>
            </div>

          </div>

          {/* Item 8 */}
          <div className="pillar-item">
            <div className="item-icon icon-yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <div className="item-content">
              <h3>Teknik kaynaklar</h3>
              <p>Industrial Engineer dergisi ve tüm IISE yayınlarına ücretsiz erişim.</p>
            </div>
          </div>

          {/* Item 9 */}
          <div className="pillar-item">
            <div className="item-icon icon-gray">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div className="item-content">
              <h3>CV değeri</h3>
              <p>Chapter üyeliği ve etkinlik katılımı güçlü bir uluslararası referans.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  );
};

export default Pillars;

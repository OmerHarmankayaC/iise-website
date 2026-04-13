import React, { useState, useEffect } from 'react';
import './Navbar.css';
import tedLogo from '../assets/ted_logo_circular.png';
import iiseLogo from '../assets/iise-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logos">
          <img src={tedLogo} alt="TEDU" className="nav-logo" />
          <img src={iiseLogo} alt="IISE" className="nav-logo iise" />
          <span className="nav-logo-text">IISE TEDU</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <a href="#" className="active">Anasayfa</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#avantajlar">Avantajlar</a>
        </div>

        <div className="nav-right">
          <div className="nav-actions">
            <a href="https://forms.gle/YhdiwVAXwymGQ6MQ9" target="_blank" rel="noopener noreferrer" className="btn btn-yellow nav-btn">Başvur</a>
            
            <button
              className={`hamburger${menuOpen ? ' active' : ''}`}
              onClick={toggleMenu}
              aria-label="Menüyü aç/kapat"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-links">
            <a href="#" onClick={closeMenu}>Anasayfa</a>
            <a href="#hakkimizda" onClick={closeMenu}>Hakkımızda</a>
            <a href="#avantajlar" onClick={closeMenu}>Avantajlar</a>
          </div>
          <div className="mobile-footer">
            <a href="https://forms.gle/YhdiwVAXwymGQ6MQ9" target="_blank" rel="noopener noreferrer" className="btn btn-yellow mobile-btn">Hemen Başvur</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

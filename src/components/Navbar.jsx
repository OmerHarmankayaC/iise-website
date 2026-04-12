import React, { useState } from 'react';
import './Navbar.css';
import tedLogo from '../assets/ted_logo_circular.png';
import iiseLogo from '../assets/iise-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logos">
          <img src={tedLogo} alt="TEDU" className="nav-logo" />
          <img src={iiseLogo} alt="IISE" className="nav-logo iise" />
          <span className="nav-logo-text">IISE TEDU</span>
        </div>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#" className="active" onClick={() => setMenuOpen(false)}>Anasayfa</a>
          <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</a>
          <a href="#avantajlar" onClick={() => setMenuOpen(false)}>Avantajlar</a>
        </div>

        <div className="nav-right">
          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="https://forms.gle/YhdiwVAXwymGQ6MQ9" target="_blank" rel="noopener noreferrer" className="btn btn-yellow nav-btn">Başvur</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

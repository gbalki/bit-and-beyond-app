import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBackdropClick = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    {/* Yeni ikon */}
                    <span className="navbar-logo-icon">
                        <img 
                            src="/images/bitbeyondicon.png" 
                            alt="Bit & Beyond Logo" 
                            width="32" 
                            height="32" 
                            style={{ verticalAlign: 'middle' }} 
                        />
                    </span>
                    Bit & Beyond
                </div>
                <button
                    className="navbar-toggle"
                    aria-label="Menüyü Aç/Kapat"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
                    <a href="/" onClick={() => setMenuOpen(false)}>Anasayfa</a>
                    <a href="/about" onClick={() => setMenuOpen(false)}>Hakkımda</a>
                    <a href="/contact" onClick={() => setMenuOpen(false)}>İletişim</a>
                </div>
            </div>
            {menuOpen && <div className="navbar-backdrop" onClick={handleBackdropClick}></div>}
        </nav>
    );
};

export default Navbar;
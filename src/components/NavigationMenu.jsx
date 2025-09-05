import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu = () => {
    const location = useLocation();

    return (
        <nav className="nav-menu">
            <ul className="nav-list">
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>Anasayfa</Link>
                </li>
                <li>
                    <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>Hakkında</Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>İletişim</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
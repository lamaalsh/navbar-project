
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <div className="side-navbar">
               <div className="logo">
        <Link to="/">
          <img src="/in2infologo.png" alt="Logo" />
        </Link>
      </div>
          <div className="menu-items">
            <Link to="/" className="menu-button">
              <span className="menu-icon">🏠</span>
              <span className="menu-text">Home</span>
            </Link>
            <Link to="/about" className="menu-button">
              <span className="menu-icon">ℹ️</span>
              <span className="menu-text">About</span>
            </Link>
            <Link to="/contact" className="menu-button">
              <span className="menu-icon">📞</span>
              <span className="menu-text">Contact</span>
            </Link>
          </div>
        </div>
      );
    };

export default Navbar;

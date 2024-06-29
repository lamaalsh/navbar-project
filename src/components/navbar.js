import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
     
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src="/removebg.png" alt="Logo" />
        </Link>
      </div>
        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </Link>
        <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faPhone} /> Contact
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;

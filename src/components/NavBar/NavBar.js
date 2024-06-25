import React from 'react';
import './NavBar.css';
import navbarlogo from '../images/navbarimg.png';

function Navbar() {
  return (
    <nav className="navbar">
        <img src={navbarlogo} alt="HRIT Logo" className="navbarlogo" />
    </nav>
  );
}

export default Navbar;
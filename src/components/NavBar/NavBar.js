import React from 'react';
import './NavBar.css';
import HRITLogo from '../images/hritgroupofinstitutions.png'; // Replace with your logo
import IAO from '../images/iao.png'; // Replace with your IAO logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="contain_navbar">
        <img src={HRITLogo} alt="HRIT Logo" className="logo-left" />
        <span className="college-name">HRIT GROUP OF INSTITUTIONS</span>
        <img src={IAO} alt="IAO Logo" className="logo-right" />
      </div>
    </nav>
  );
}

export default Navbar;
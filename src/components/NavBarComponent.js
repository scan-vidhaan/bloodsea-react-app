import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DonorSearch from './DonorSearch'; // Adjust path if needed
import DonorList from './DonorList'; // Adjust path if needed

const NavBar = () => {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(47, 2, 29, 0.93)' }}>
      <Link
  className="navbar-brand"
  to="/"
  style={{ marginLeft: '15px', marginRight: '15px' }}
>
  BloodSea
</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
           
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://forms.gle/npdfQTqzjJ6tKwka7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>

     
    
  );
};

export default NavBar;

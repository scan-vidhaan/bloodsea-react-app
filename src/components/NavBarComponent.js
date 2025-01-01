import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(47, 2, 29, 0.93)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Donor App</Link>
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
              <a
                className="nav-link"
                href="https://forms.gle/npdfQTqzjJ6tKwka7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Back</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

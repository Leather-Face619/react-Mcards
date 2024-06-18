import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Navi() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="https://vegamovies.vg/templates/vegamovies/images/vegav2.png" style={{width:'200px'}} />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/allMov" className="nav-links">
              ALL movies
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://hdhub4u.wales/request-a-movie/" className="nav-links">
            request-a-movie
            </a>
            </li>
        </ul>
        
      </div>
    </nav>
  );
}

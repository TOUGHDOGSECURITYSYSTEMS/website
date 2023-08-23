//Implementation of the header component that can be reused in other components
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/WhiteTD.png';
import '../components/header.css';
import 'bootstrap'; // Import Bootstrap CSS

function Header() {
  return (
    <div>
      <nav className="navbar" style={{margin: 0, padding: 0}}>
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={logoImage} alt="Logo" width="auto" height="auto" className="d-inline-block align-top" />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link">Support</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex ml-auto">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

            </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;

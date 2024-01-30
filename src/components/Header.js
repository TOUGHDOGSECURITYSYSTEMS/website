import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/WhiteTD.png';
import '../assets/stylings/header.css';
import '../assets/stylings/generalStyles.css';
import 'bootstrap';

function Header() {
  const location = useLocation(); // Get the current location
  const [reloadLinks, setReloadLinks] = useState([]); // Maintain a list of links that have been reloaded

  const handleLinkClick = (path) => {
    if (location.pathname === path && !reloadLinks.includes(path)) {
      setReloadLinks((prevLinks) => [...prevLinks, path]);
      window.location.reload();
    }
  };

  return (
    <div
      className='header'
      style={{
        minWidth: 'var(--min-width)',
        position: 'relative',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        display: 'flex',
        width: 'inherit',
      }}>
      <nav
        className='header-navbar navbar'
        style={{
          margin: 0,
          padding: 0,
          borderBottom: '5px red solid',
          backgroundColor: 'black',
          width: '100%',
          height: '75px',
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
        }}>
        <div className='container-fluid' style={{ width: 'inherit' }}>
          <Link
            to='/'
            className='navbar-brand'
            onClick={() => handleLinkClick('/')}>
            <img
              src={logoImage}
              alt='Logo'
              width='auto'
              height='auto'
              className='d-inline-block align-top'
            />
          </Link>
          <ul
            className='navbar-nav'
            style={{ flexDirection: 'row', color: 'white' }}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-link'
                onClick={() => handleLinkClick('/')}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-link'
                onClick={() => handleLinkClick('/about')}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-link'
                onClick={() => handleLinkClick('/login')}>
                Tech Support
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-link'
                onClick={() => handleLinkClick('/contact')}>
                Contact Us
              </Link>
            </li>
          </ul>
          <form className='d-flex ml-auto'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;

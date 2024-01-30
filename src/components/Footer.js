import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/stylings/footer.css';
import '../assets/stylings/generalStyles.css';
import logoImage from '../assets/images/WhiteTD.png';
import youtubeImg from '../assets/images/youtubeimg.png';
import facebookImg from '../assets/images/facebookimg.png';
import instagramImg from '../assets/images/instagramimg.png';
import linkedinImg from '../assets/images/linkedinimg.png';

function Footer() {
  const location = useLocation(); // Get the current location
  const [reloadLinks, setReloadLinks] = useState([]); // Maintain a list of links that have been reloaded

  const handleLinkClick = (path) => {
    if (location.pathname === path && !reloadLinks.includes(path)) {
      setReloadLinks((prevLinks) => [...prevLinks, path]);
      window.location.reload();
    }
  };

  return (
    <div className='footer'>
    <div className='footer-container'>
      <div className='column'>
        <div className='left-grid grid-container'>
          <div className='logo-row'>
            <Link to="/" onClick={() => handleLinkClick('/')}> 
              <img src={logoImage} alt="Logo" width="195px" height="88px" />
            </Link>
          </div>

          <div className='search-row'>
            <form className="d-flex ml-auto">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>

          <div className='links-row'>
            <ul>
              <li>
                <Link to="https://www.youtube.com/channel/UChuK02g9ghGfrWyAJwo362g" width="auto" height="auto"> 
                  <img src={youtubeImg} alt="Logo" width="auto" height="auto" />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/toughdogss/" width="auto" height="auto"> 
                  <img src={facebookImg} alt="Logo" width="auto" height="auto" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/toughdog_security/" width="auto" height="auto"> 
                  <img src={instagramImg} alt="Logo" width="auto" height="auto" />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/toughdog-security-systems/" width="auto" height="auto"> 
                  <img src={linkedinImg} alt="Logo" width="auto" height="auto" />
                </Link>
              </li>
            </ul>
          </div>
          <div className='tag-row'>
            <h1 style={{ fontSize: '12px' }}>
              <span className='tag1' >
                CE TRAINING SCHOOL Y09374001
              </span>
              <span className='tag2'>
                ©2023 TOUGHDOG SECURITY SYSTEM      
              </span>
            </h1>
          </div>
        
        </div>
        <div className='right-grid grid-container'>
          <div className='contactus-row'>
            <Link to="/contact" className="linkElement" onClick={() => handleLinkClick('/contact')}>
              <div className='buttonContainer'>
                <span className='buttonLabel'>
                  CONTACT US
                </span>
                <span className='arrow-icon'>
                  <div>
                    <svg className='arrow-svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' bbox='9 70.9 181 59'>
                      <g>
                        <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                      </g>
                    </svg>
                  </div>
                </span>
              </div>
            </Link>
          </div>
          <div className='email-row'>
            <h1 style={{ fontSize: '22px' }}>
              <span className='email-text'>
                <Link to='mailto:support@tdsecuritysystems.com' className='email1'>
                  support@tdsecuritysystems.com
                </Link>
                <Link to='mailto:sales@tdsecuritysystems.com' className='email2'>
                  sales@tdsecuritysystems.com
                </Link>
              </span>
            </h1>
          </div>
          <div className='location1'>
            <h1>
              <span className='general-span'>
                <span className='red-text'>Pharr, Texas</span>
                <span className='white-text'>1500 Mid Cities Dr, Pharr, TX 78577</span>
                <span className='white-text'>Ph 956-205-1345</span>
              </span>
            </h1>
          </div>

          <div className='location2'>
            <h1>
              <span className='general-span'>
                <span className='red-text'>San Antonio, Texas</span>
                <span className='white-text'>403 E Ramsey Rd Suite 203, San Antonio, TX 78216</span>
                <span className='white-text'>Ph 210-538-6878</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;

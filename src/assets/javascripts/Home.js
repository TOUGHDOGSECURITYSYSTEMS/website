import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap'; // Import Bootstrap CSS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../stylings/home.css'
function Home() {
  return (
    <div className='home-page'>
      <Header />
      <div className='home-container'>
        <div className='content-container'>
          <div className='techid-container'>
            <div>
              <div className='techid-row'>
            <div className='techid-button'>
              <Link to='/support' className='techidlink'>
                <div className='techid-buttonContainer'>
                  <span className='techid-label'>CLICK HERE TO GET YOUR TECH ID</span>
                  <span className='techid-arrow'>
                    <div>
                      <svg className='techidarrow-svg' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 200 200" data-bbox="9 70.9 181 59">
                        <g>
                          <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                        </g>

                      </svg>
                    </div>
                  </span>
                </div>
              </Link>

            </div>

              </div>
            </div>
          </div>

          <div className='intro-container'>
            <div className='intro-column'>

            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;

import React from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap'; // Import Bootstrap CSS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../stylings/home.css'
import logoImage from '../images/dogwhite.png';

const homeStyles = {

  homePage: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection: 'column',
    minWidth: 'var(--min-width)',
    width: '100%',
  },

  homeContainer: {
    display: 'block',
  },




};

function Home() {
  return (
    <div className='home-page' style={homeStyles.homePage}>
      <Header />
      <div className='home-container' style={{}}>
        <div className='content-container'>
          <div className='techid-container'>
            <div>
              <div className='techid-row'>
                <div className='techid-button fadeInRight'>
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
              <div className='video-container'>
                <video autoPlay muted loop className='rawintro-video'>
                  <source src='https://video.wixstatic.com/video/769a5b_bb204956a25d4dc28b5db88060c977b1/1080p/mp4/file.mp4'
                  type='video/mp4'></source>
                </video>
              </div>

            </div>
            <div className='desc-container'>
              <div className='desc-content'>
                <div className='desc'>
                  <Link to="/" className="whitelogo fadeInRight"> 
                    <img src={logoImage} alt="Logo" width="auto" height="auto" className="d-inline-block align-top" />
                  </Link>
                  <div className='big-text fadeInLeft'>
                    <h3 className='bigtext-style'>Over 10 years protecting your home, business, and peace of mind.</h3>
                  </div>
                  <div className='small-text fadeInRight'>
                    <h1 className='smalltext-style'>Toughdog is known for its focus on delivering high-quality and reliable surveillance systems for both homes and businesses. Explore our full line of products.</h1>
                  </div>
                  <Link to="/" className='getstarted-link fadeInLeft'>
                    <div className='getstarted-button'>
                      <span className='text'>GET STARTED</span> 
                      <span className='getstarted-arrow'>
                        <div>
                          <svg className='getstartedarrow-svg' data-bbox="9 70.9 181 59" viewBox="0 0 200 200">
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

          <div className='newproducts-container'>
            <div>
              <video autoPlay muted loop className='newproductsraw-video'>
                <source src="https://video.wixstatic.com/video/769a5b_45392bc1ac4a442980259a0502628bfc/1080p/mp4/file.mp4" type='video/mp4'></source>

              </video>

            </div>

          </div>


        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;

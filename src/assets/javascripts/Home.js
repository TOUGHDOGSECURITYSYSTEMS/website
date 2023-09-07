import React from 'react';
import 'bootstrap'; // Import Bootstrap CSS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../stylings/home.css'
function Home() {
  return (
    <div className='home-page'>
      <div>
        <Header />
      </div>
      <div className='home-container'>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

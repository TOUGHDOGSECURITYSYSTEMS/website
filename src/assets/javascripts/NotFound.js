import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NotFound() {
  return (
    <div>
      <Header />
      <div className='container'>
        <h1>404 Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;

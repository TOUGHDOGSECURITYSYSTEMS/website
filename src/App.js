import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/javascripts/Home';
import About from './assets/javascripts/About'; // Import your About component
import Products from './assets/javascripts/Products'; // Import your Products component
import Support from './assets/javascripts/Support'; // Import your Support component
import ContactUs from './assets/javascripts/ContactUs'; // Import your ContactUs component
import Events from './assets/javascripts/Events'; // Import your Events component
//import NotFound from './assets/javascripts/NotFound';
import Login from './assets/javascripts/Login'
import ScrollToTopOnReload from './components/onPageComponents';

function App() {
  return (
    <Router>
      <ScrollToTopOnReload/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/products" element={<Products />} /> {/* Add Products route */}
        <Route path="/support" element={<Support />} /> {/* Add Support route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Add ContactUs route */}
        <Route path="/events" element={<Events />} /> {/* Add Events route */}
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
      </Routes>
    </Router>
  );
}

export default App;

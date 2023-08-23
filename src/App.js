import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // Import your About component
import Products from './pages/Products'; // Import your Products component
import Support from './pages/Support'; // Import your Support component
import ContactUs from './pages/ContactUs'; // Import your ContactUs component
import Events from './pages/Events'; // Import your Events component
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/products" element={<Products />} /> {/* Add Products route */}
        <Route path="/support" element={<Support />} /> {/* Add Support route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Add ContactUs route */}
        <Route path="/events" element={<Events />} /> {/* Add Events route */}
      </Routes>
    </Router>
  );
}

export default App;

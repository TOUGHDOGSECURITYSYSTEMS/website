import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/javascripts/Home';
import About from './assets/javascripts/About'; // Import your About component
import Products from './assets/javascripts/Products'; // Import your Products component
import Support from './assets/javascripts/Support'; // Import your Support component
import ContactUs from './assets/javascripts/ContactUs'; // Import your ContactUs component
import Events from './assets/javascripts/Events'; // Import your Events component
import SignUp from './assets/javascripts/supportSignup';
import TechSupport from './assets/javascripts/TechSupport';

//import NotFound from './assets/javascripts/NotFound';
import Login from './assets/javascripts/Login'
import ScrollToTopOnReload from './components/onPageComponents';

function App() {
  return (
    <Router>
      <ScrollToTopOnReload/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/techsupport" element={<TechSupport />} />
      </Routes>
    </Router>
  );
}

export default App;

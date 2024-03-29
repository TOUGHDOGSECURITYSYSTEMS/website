import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './assets/javascripts/About'; // Import your About component
import Products from './assets/javascripts/Products'; // Import your Products component
import Support from './assets/javascripts/Support'; // Import your Support component
import ContactUs from './assets/javascripts/ContactUs'; // Import your ContactUs component
import SignUp from './assets/javascripts/supportSignup';
import SupportWizard from './assets/javascripts/Supportwizard';

import NotFound from './assets/javascripts/NotFound';
import Login from './assets/javascripts/Login';
import ScrollToTopOnReload from './components/onPageComponents';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Function to set isAuthenticated to true upon successful login
  const handleSuccessfulLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <ScrollToTopOnReload/>
      <Routes>
        <Route path="/" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/techsupport" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route 
          path="/login"
          element={<Login onSuccessfulLogin={handleSuccessfulLogin} />}
        />
        {isAuthenticated && <Route path="/dashboard" element={<SupportWizard />} />}

        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </Router>
  );
}

export default App;

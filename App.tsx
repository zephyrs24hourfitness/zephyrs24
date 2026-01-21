
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Amenities from './pages/Amenities';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import Pickleball from './pages/Pickleball';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans-and-rates" element={<Plans />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pickleball" element={<Pickleball />} />
            {/* Catch-all for demo purposes, redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

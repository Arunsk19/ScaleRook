import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StrategyCallModal from './components/StrategyCallModal';
import BackgroundVideo from './components/BackgroundVideo';
import BackgroundControls from './components/BackgroundControls';

import Home from './pages/Home';
import Services from './pages/Services';
import BusinessPartner from './pages/BusinessPartner';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper on page route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [overlayDarkness, setOverlayDarkness] = useState(0.45);
  const [overrideThemeKey, setOverrideThemeKey] = useState(null);
  const [activeSectionId, setActiveSectionId] = useState('hero');

  // Automatic IntersectionObserver to detect visible section theme
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = null;
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
          currentSection = sec.getAttribute('data-section');
        }
      });
      if (currentSection) {
        setActiveSectionId(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-[#0B0B12] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
        {/* Dynamic Background Video Loop System across all pages */}
        <BackgroundVideo
          isVideoEnabled={isVideoEnabled}
          overlayDarkness={overlayDarkness}
          overrideThemeKey={overrideThemeKey}
          activeSectionId={activeSectionId}
        />

        {/* Navigation Bar */}
        <Navbar onOpenStrategyModal={() => setIsStrategyModalOpen(true)} />

        {/* Page Content Viewport */}
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenStrategyModal={() => setIsStrategyModalOpen(true)} />} />
            <Route path="/services" element={<Services onOpenStrategyModal={() => setIsStrategyModalOpen(true)} />} />
            <Route path="/business-partner" element={<BusinessPartner onOpenStrategyModal={() => setIsStrategyModalOpen(true)} />} />
            <Route path="/about" element={<About onOpenStrategyModal={() => setIsStrategyModalOpen(true)} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenStrategyModal={() => setIsStrategyModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

        {/* Floating Background Video Control Widget */}
        <BackgroundControls
          isVideoEnabled={isVideoEnabled}
          setIsVideoEnabled={setIsVideoEnabled}
          overlayDarkness={overlayDarkness}
          setOverlayDarkness={setOverlayDarkness}
          overrideThemeKey={overrideThemeKey}
          setOverrideThemeKey={setOverrideThemeKey}
        />

        {/* Global Strategy Call Booking Modal */}
        <StrategyCallModal
          isOpen={isStrategyModalOpen}
          onClose={() => setIsStrategyModalOpen(false)}
        />
      </div>
    </Router>
  );
}

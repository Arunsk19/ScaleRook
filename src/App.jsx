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
      <div className="site-shell relative min-h-screen flex flex-col bg-[#050505] text-[#F3EFE7] selection:bg-[#7B00FF] selection:text-white">
        <BackgroundVideo
          isVideoEnabled={isVideoEnabled}
          overlayDarkness={overlayDarkness}
          overrideThemeKey={overrideThemeKey}
          activeSectionId={activeSectionId}
        />

        <Navbar onOpenStrategyModal={() => setIsStrategyModalOpen(true)} />

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

        <div className="relative z-10">
          <Footer />
        </div>

        <BackgroundControls
          isVideoEnabled={isVideoEnabled}
          setIsVideoEnabled={setIsVideoEnabled}
          overlayDarkness={overlayDarkness}
          setOverlayDarkness={setOverlayDarkness}
          overrideThemeKey={overrideThemeKey}
          setOverrideThemeKey={setOverrideThemeKey}
        />

        <StrategyCallModal
          isOpen={isStrategyModalOpen}
          onClose={() => setIsStrategyModalOpen(false)}
        />
      </div>
    </Router>
  );
}

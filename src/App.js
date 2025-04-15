import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import PWAPage from './services/development/PWAPage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #06141B;
    color: #CCD0CF;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" isLoading={isLoading} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                  <Benefits />
                  <Cases />
                  <Contact />
                </>
              } />
              <Route path="/services" element={<Navigate to="/" replace />} />
              <Route path="/services/development" element={<Navigate to="/" replace />} />
              <Route path="/services/development/pwa" element={<PWAPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Loader from './components/Loader';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #000000;
    color: #ffffff;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #444;
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
    <>
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
            <Hero />
            <Services />
            <Benefits />
            <Cases />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App; 
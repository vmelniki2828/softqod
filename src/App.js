import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import PWAPage from './services/development/PWAPage';
import BusinessAutomationPage from 'services/development/BusinessAutomationPage';
import ERPCRMPage from 'services/development/ERPCRMPage';
import EcommercePage from 'services/development/EcommercePage';
import LandingPage from 'services/development/LandingPage';
import MobileAppsPage from 'services/development/MobileAppsPage';
import APIDevelopmentPage from 'services/development/APIDevelopmentPage';
import BigDataPage from 'services/development/BigDataPage';
import ElectronicJournalsPage from 'services/development/ElectronicJournalsPage';
import OnlineEducationPage from 'services/development/OnlineEducationPage';
import DocumentManagementPage from 'services/development/DocumentManagementPage';
import CorporateWebsitePage from 'services/development/CorporateWebsitePage';
import AIPage from 'services/development/AIPage';
import BannerAds from './services/design/BannerAds';
import AIBannerMarketing from 'services/marketing/AIBannerMarketing';
import BrandbookPage from 'services/design/BrandbookPage';
import WebDesign from 'services/design/WebDesign';
import UxUiDesign from 'services/design/UxUiDesign';
import TypographyLettering from 'services/design/TypographyLettering';
import Branding from 'services/design/Branding';

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
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Services />
                    <Benefits />
                    <Cases />
                    <Contact />
                  </>
                }
              />
              <Route path="/services/development/pwa" element={<PWAPage />} />
              <Route
                path="/services/development/automation"
                element={<BusinessAutomationPage />}
              />
              <Route
                path="/services/development/erp"
                element={<ERPCRMPage />}
              />
              <Route
                path="/services/development/ecommerce"
                element={<EcommercePage />}
              />
              <Route
                path="/services/development/landing"
                element={<LandingPage />}
              />
              <Route
                path="/services/development/mobile"
                element={<MobileAppsPage />}
              />
              <Route
                path="/services/development/API"
                element={<APIDevelopmentPage />}
              />
              <Route
                path="/services/development/bigdata"
                element={<BigDataPage />}
              />
              <Route
                path="/services/development/journals"
                element={<ElectronicJournalsPage />}
              />
              <Route
                path="/services/development/education"
                element={<OnlineEducationPage />}
              />
              <Route
                path="/services/development/document"
                element={<DocumentManagementPage />}
              />
              <Route
                path="/services/development/corporate"
                element={<CorporateWebsitePage />}
              />
              <Route path="/services/development/AI" element={<AIPage />} />
              <Route path="/services/design/banners" element={<BannerAds />} />
              <Route
                path="/services/design/brandbook"
                element={<BrandbookPage />}
              />
              <Route
                path="/services/design/webdesign"
                element={<WebDesign />}
              />
              <Route
                path="/services/design/uxuidesign"
                element={<UxUiDesign />}
              />
              <Route
                path="/services/design/typography_lettering"
                element={<TypographyLettering />}
              />
              <Route path="/services/design/branding" element={<Branding />} />
              <Route
                path="/services/marketing/banners"
                element={<AIBannerMarketing />}
              />
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

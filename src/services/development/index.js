import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PWAPage from './PWAPage';

const DevelopmentRoutes = () => {
  return (
    <Routes>
      <Route path="pwa" element={<PWAPage />} />
    </Routes>
  );
};

export default DevelopmentRoutes; 
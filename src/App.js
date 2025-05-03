import { Route, Routes } from 'react-router-dom';

import HomePage from '../src/pages/home';
import PrivacyPolicy from '../src/pages/privacyPolicy'
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;

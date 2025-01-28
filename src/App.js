import { Route, Routes } from 'react-router-dom';

import HomePage from '../src/pages/home';
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;

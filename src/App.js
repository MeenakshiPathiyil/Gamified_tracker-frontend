import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import W0 from './pages/w0';

function App() {
  return (
    <Routes>
      <Route path="/" element={<W0 />} />  {/* Render W0 component for the root path */}
    </Routes>
  );
}

export default App;

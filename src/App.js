import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import W0 from './pages/w0';
import Home from './pages/home';
import HabitTracker from './pages/trckr'; 
import Landing from './pages/Landing';
import Profile from './pages/profile';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} />
      <Route path="/login" element={<W0 />} />  
      <Route path="/home" element={<Home />} /> 
      <Route path="/tracker" element={<HabitTracker />} />
      <Route path="/profile" element={<Profile />} /> */}
      <Route path ="/" element={<gamemap/>}/>
    </Routes>
  );
}

export default App;
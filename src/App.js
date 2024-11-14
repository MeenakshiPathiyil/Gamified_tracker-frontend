import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import W0 from './pages/w0';
import Home from './pages/home';
import HabitTracker from './pages/trckr'; 
import Landing from './pages/Landing';
import Journal from './pages/Journal';
import Profile from './pages/profile';
import Avatar from './pages/Avatar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<W0 />} />  
      <Route path="/home" element={<Home />} /> 
      <Route path="/tracker" element={<HabitTracker />} /> 
      <Route path="/Journal" element={<Journal />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/avatar" element={<Avatar />} />

    </Routes>
  );
}

export default App;
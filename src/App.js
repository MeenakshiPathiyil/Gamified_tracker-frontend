import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  
import Journal from './pages/Journal';
import Avatar from './pages/Avatar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/journal" element={<Journal />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </Router>
  );
}

export default App;
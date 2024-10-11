import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  // Import the Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
      </Routes>
    </Router>
  );
}


export default App;

import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import W0 from './pages/w0';
import Signup from './pages/Signup'
import Home from './pages/home';
import HabitTracker from './pages/trckr'; 
import Landing from './pages/Landing';
import Journal from './pages/Journal';
import Profile from './pages/profile';
import Avatar from './pages/Avatar';
import Shop from './pages/Shop';


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} />
      <Route path="/login" element={<W0 />} />  
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home />} /> 
      <Route path="/tracker" element={<HabitTracker />} /> 
      <Route path="/Journal" element={<Journal />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/shop" element={<Shop/>}/> */}
      {/* <Route path="/game" element={<Game />} /> */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<W0 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop/>}/> 
      <Route path="/tracker" element={<HabitTracker />} /> 
      <Route path="/profile" element={<Profile />} />
      <Route path="/journal" element={<Journal />}/>
      

    </Routes>
  );
}

export default App;
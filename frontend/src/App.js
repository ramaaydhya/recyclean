import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact={true} element={<HeroSection />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>  
    </main>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './components/Auth';
import ParticlesReact from './pages/ParticlesReact';
import "./App.css"
import "./index.css"


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(false); 

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Method to check if the screen is mobile
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIfMobile(); 
    window.addEventListener('resize', checkIfMobile); 

    return () => {
      window.removeEventListener('resize', checkIfMobile); 
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<ParticlesReact />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

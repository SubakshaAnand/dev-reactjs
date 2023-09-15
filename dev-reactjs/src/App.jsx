import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Signup from './pages/login-page/signup';
import LoginPage from './pages/login-page/loginpage';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

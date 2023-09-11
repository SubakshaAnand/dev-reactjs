import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './pages/dashboard/dashboard';
import Signup from './pages/login-page/signup';
import LoginPage from './pages/login-page/loginpage';
import './App.css';
import { setIsauthenticated } from './pages/login-page/reduxlogin/actions';


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Check for the presence of the authentication token in local storage
    const token = localStorage.getItem('authToken');

    if (token) {
      // Set the authentication state to true in Redux
      dispatch(setIsauthenticated(true));
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

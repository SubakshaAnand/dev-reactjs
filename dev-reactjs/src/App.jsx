import React from 'react';
import './App.css';

//importing pages from difffe
import Dashboard from './pages/dashboard/dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/login-page/login';
import Signup from './pages/login-page/signup';

function App() {
  return (
    <>
      <Router>
        {/* <div>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </div> */}
        <Routes>
          <Route exact path='/' element={< LoginPage />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

//importing pages from difffe
import Dashboard from './pages/dashboard/dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/login-page/login';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;

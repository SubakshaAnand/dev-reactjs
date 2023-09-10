import React from 'react';
import './App.css';

//importing pages from difffe
import Dashboard from './pages/dashboard/dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
      </ul>
    </div>
    <Routes>
<Route exact path='/' element={< Dashboard/>}></Route>
</Routes>
  </Router>
    </>
  );
}

export default App;

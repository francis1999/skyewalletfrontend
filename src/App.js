import logo from './logo.svg';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav';
import Login from './Login';
import PrivateRoutes from './includes/PrivateRoute';
import PublicRoutes from './includes/PublicRoute';
import { useState } from 'react';
import { getToken } from './includes/Controller';
import { useEffect } from 'react';
import Index from './dashboard/Index';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}

      <Routes>
        <Route path='/' element={<Home />} exact />
      </Routes>

      <Routes>
        <Route path="Login" element={<Login />} />

      </Routes>
      <Routes>
        <Route path="/dashboard/Index" element={<Index />} />
      </Routes>


      {/* <Routes>
        <Route path='Login' element={<Login />} />
      </Routes> */}


    </div>
  );
}


export default App;

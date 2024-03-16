import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/products' exact element={<Products/>}/>
        <Route path='/sign-up' exact element={<SignUp/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

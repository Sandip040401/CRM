import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Home from './components/Home';
import Documentation from './components/Documentation';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './components/Features';


function App() {

  return (
    <>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Features" element={<Features />} />
              <Route path="/Documentation" element={<Documentation />} />
              <Route path="/Contact" element={<ContactUs />} />
              <Route path="/Registration" element={<Registration />} />
            </Routes>
          </Router>
    </>
  );
}

export default App;

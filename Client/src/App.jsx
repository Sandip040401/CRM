import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';
import Home from './components/home';
import Documentation from './components/documentation';
import ContactUs from './components/contactUs';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand brand" href="/"><span className='brandname'>Xeotec </span><span className='brand-name'>E-Services</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page"><span className="hover">Home</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/documentation" className="nav-link active" aria-current="page"><span className="hover">Documentation</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link active" aria-current="page"><span className="hover">Contact Us</span></Link>
                </li>
              </ul>
            </div>
            <div className='top-bar'> 
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link active" aria-current="page"><span className='hover'>Login</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/registration" className="nav-link active" aria-current="page"><span className="hover">Registration</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleWatchDemoClick = () => {
    console.log("Watch Demo button clicked");  // Debug log
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    console.log("Close button clicked");  // Debug log
    setIsPopupOpen(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Try Xeotec E-Services CRM for Free.</h1>
          <p>Unite marketing, sales, and service in a single app. Try Xeotec E-Services CRM today. Made with love in MERN.</p>
          <div style={{ display: 'flex' }}>
            <Link to="/contact" className="nav-link active" aria-current="page">
              <button className='btn demo-btn btn-primary'>Contact</button>
            </Link>
            <button 
              className='btn demo-btn demo-btn-watch btn-outline-primary' 
              onClick={handleWatchDemoClick}
            >
              Watch Demo
            </button>
          </div>
        </div>
        <div className="col col-video">
          <div className='video'>
            <video width="320" height="240"style={{height:'inherit',width:'100%',borderRadius:'20px'}} autoPlay muted>
              <source src="src/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>×</button>
            <video width="100%" height="100%" controls autoPlay>
              <source src="src/watch-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

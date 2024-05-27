import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Try Xeotec E-Services CRM for Free.</h1>
          <p>Unite marketing, sales, and service in a single app. Try Xeotec E-Services CRM today. Made with love in MERN.</p>
          <button className='btn demo-btn btn-primary'>Contact </button>
          <button className='btn demo-btn demo-btn-watch btn-outline-primary'>Watch Demo</button>
        </div>
        <div className="col col-video">
          <div className='video'>
            <video width="320" height="240" autoPlay  muted>
              <source  src="src/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

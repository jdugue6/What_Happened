import React from 'react';
import './Home.css'

const Banner = ({ appName }) => {
  return (
    <div className="banner joeybanner">
      <div className="container">
        <h1 className="logo-font">
          {appName}
        </h1>
        <p>fix later.</p>
      </div>
    </div>
  );
};

export default Banner;
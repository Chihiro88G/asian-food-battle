import React from 'react';

function Top() {
  return (
    <div className="top-section">
      <img src='img-noodle.jpg' alt='asian noodle' />
      <div className="overlay"></div>
      <div className='top-logo'>
        <div className='logo-container'>
        <img src='logo_asianfoodbattle_white.png' alt='Asian Food Battle' className='logo-wrapper'/>
        </div>
      </div>
      {/* <div className='top-main'> */}
        <div className='top-title'>
          <h1 className='gradient-words'>Asian Food Battles</h1>
          <h2>in GTA and Beyond</h2>
        </div>
        <div className='top-subtitle'>
          <h3>Upcoming Battle in Fall 2025</h3>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Top;

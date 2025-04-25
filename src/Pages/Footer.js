import React from 'react';
import InstagramIcon from '../components/SocialIcons';

function Footer() {
  const clickInstagram = () => {
    window.open('https://www.instagram.com/asianfoodbattle2023/');
  };

  return (
    <div className="footer-section">
      <h3>Three Headed Dragon Inc.</h3>
      <p>info@asianfoodbattle.com</p>
      <div className='instagram-icon-container'>
        <button onClick={clickInstagram}>
          <InstagramIcon />
        </button>
      </div>
      <small>©2025 Three Headed Dragon Inc. All rights reserved.</small>
    </div>
  );
}

export default Footer;

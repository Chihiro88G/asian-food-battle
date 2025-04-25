import React from 'react';
import ImageSlider from '../components/ImageSlider';
import InstagramIcon from '../components/SocialIcons';

function Images() {
  const clickInstagram = () => {
    window.open('https://www.instagram.com/asianfoodbattle2023/');
  }

  return (
    <div className="images-section">
      <div className='follow-instagram-container'>
        <h2>Follow us on Instagram!</h2>
        <div className='instagram-icon-container'>
          <button onClick={clickInstagram}>
            <InstagramIcon />
          </button>
        </div>
      </div>
      <ImageSlider />
    </div>
  );
}

export default Images;

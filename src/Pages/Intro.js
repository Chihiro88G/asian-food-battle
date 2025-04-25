import React from 'react';

function Intro() {
  return (
    <div className="intro-section">
      <img src='img-takoyaki.jpg' alt='takoyaki' />
      <div className="overlay"></div>
      {/* <div className='intro-title'>
        <h2 className='gradient-words'>The Ultimate Asian Food Showdown</h2>
      </div> */}
      <div className='intro-subtitle'>
        {/* <h3>
          Welcome to the Asian Food Battles — where flavours throw down and only the tastiest survive!
          This is no ordinary food fest — it's a full-on flavour showdown with bragging rights on the line.
          YOU get to be the judge — taste your way through the competition and decide who takes the crown.
          Bring your appetite. Bring your friends. Let the battles begin!
        </h3> */}

        <div className='intro-item'>
          <h3 className='gradient-words'>Welcome to the Asian Food Battles</h3>
          <p> — where flavours throw down and only the tastiest survive!
          This is no ordinary food fest — it's a full-on flavour showdown with bragging rights on the line.</p>
        </div>

        <div className='intro-item'>
          <h3 className='gradient-words'>YOU get to be the judge</h3>
          <p> — taste your way through the competition and decide who takes the crown.
          Bring your appetite. Bring your friends. Let the battles begin!</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;

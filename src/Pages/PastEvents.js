import React from 'react';

function PastEvents() {
  return (
    <div className="past-events-section">
      <h2 className='section-title'>Past Events</h2>
      <div className='past-event-container'>
        <img src='past-event.jpg' alt='asian food battle' />
        <h3>Thrilling Food Battle that Brings Communities Together!</h3>
        <p className='crimson-text-regular p-20'>
          <b>2023</b> brought one unforgettable and very close food battle, where Japanese cuisine faced off against Taiwanese flavors. 
          Attendees served as judges and crowned <b>Taiwan</b> the winner — a true celebration of the vibrant spirit and delicious diversity of Asian food.
        </p>
      </div>
    </div>
  );
}

export default PastEvents;

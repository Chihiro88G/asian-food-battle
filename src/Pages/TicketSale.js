import React from 'react';

function TicketSale() {
  return (
    <div className="ticketsale-section">
      <img src='ticketsale-bg.jpg' alt='fire' />
      <div className='ticketsale-title'>
        <h2>Event Tickets</h2>
      </div>
      <div className='ticketsale-subtitle'>
        <h3>
          Get ready to savor the excitement of our upcoming culinary battles! 
          Tickets for our events will be available right here, so stay tuned and be among the first to secure your spot.
        </h3>
        <small>Link will be available when the tickets are ready</small>
      </div>
      <div className='ticket-button'>
        <button className='ticket-btn'>
          GET TICKET
        </button>
      </div>
    </div>
  );
}

export default TicketSale;

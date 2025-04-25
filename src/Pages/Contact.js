import React from 'react';

function Contact() {
  return (
    <div className="contact-section">
      <h2 className='section-title'>Contact</h2>
      <form className='contact-form'  action="https://formbold.com/s/6Q5eX" method="POST" enctype="multipart/form-data" >
        <div className='input-half'>
          <div className='input-item'>
            <label>* First Name</label>
            <input type='text' name='first_name' required />
          </div>
          <div className='input-item'>
            <label>Last Name</label>
            <input type='text' name='last_name'/>
          </div>
        </div>
        <div className='input-full'>
          <div className='input-item'>
            <label>Company Name</label>
            <input type='text' name='company_name'/>
          </div>
        </div>
        <div className='input-full'>
          <div className='input-item'>
            <label>* Email</label>
            <input type='email' name='email' required />
          </div>
        </div>
        <div className='input-full'>
          <div className='input-item'>
            <label>* Message</label>
            <textarea name='message' rows='10' required />
          </div>
        </div>
        <div className='input-full'>
          <input type='submit' value='Send' />
        </div>
      </form>
    </div>
  );
}

export default Contact;

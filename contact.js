import React from 'react';

const ContactMe = () => {
  const emailAddress = 'saikaranam00@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <p>
        My email id : saikaranam00@gmail.com
      </p>
      <p>Mobile : 9392XXXXXX</p>
      <p>Click the button below to send me an email:</p>
      <div style={{ display: 'inline-block' }}>
        <button onClick={handleEmailClick} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ContactMe;

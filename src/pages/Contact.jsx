import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleInputChange}
        className="form-control"
      />
      <p>Your Name: {name}</p>
    </div>
  );
}

export default Contact;

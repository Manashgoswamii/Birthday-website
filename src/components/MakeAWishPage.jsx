import React, { useState } from 'react';
import './MakeAWishPage.css';

const MakeAWishPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Wish from ${name}: ${message}`);
  };

  return (
    <div className="make-a-wish-page">
      <h2>Make a Wish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Wish"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Wish</button>
      </form>
    </div>
  );
};

export default MakeAWishPage;

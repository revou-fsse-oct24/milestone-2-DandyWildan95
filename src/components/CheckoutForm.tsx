// src/components/CheckoutForm.tsx
import React, { useState } from 'react';

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout:', { name, address });
    // Handle the checkout process here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;

// src/components/Cart.tsx
import React from 'react';

interface CartProps {
  cartItems: Array<{ id: number; name: string; price: number; quantity: number; }>;
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

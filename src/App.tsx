// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';

const App: React.FC = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]);

  const [cartItems, setCartItems] = useState<Array<{ id: number; name: string; price: number; quantity: number; }>>([]);

  const addToCart = (id: number) => {
    const product = products.find(product => product.id === id);
    if (product) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <CheckoutForm />
    </div>
  );
};

export default App;


import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
  <div className="homepage">
    <h1>Welcome to Our Online Tobacco Store</h1>
    <p>Your trusted source for high-quality tobacco products.</p>  {/* Add a tagline */}
    <nav>
      <ul>
        <li><Link to="/products">Shop Now</Link></li>  {/* Direct to products */}
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
    {/* Consider adding an image or banner here */}
  </div>
);

export default HomePage;
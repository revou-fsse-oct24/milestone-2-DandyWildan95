// src/components/CreativeLayouts.tsx
import React from 'react';
import './CreativeLayouts.css'; // Import corresponding CSS for styles

const CreativeLayouts: React.FC = () => {
    return (
        <div className="creative-layouts">
            <header className="header">
                <h1>Welcome to the Online Tobacco Store</h1>
                <p>Your one-stop shop for premium tobacco products.</p>
            </header>
            <section className="products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    <div className="product-item">
                        <h3>Premium Cigarette 1</h3>
                        <p>Experience the finest tobacco blend.</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="product-item">
                        <h3>Premium Cigarette 2</h3>
                        <p>Discover the rich flavor.</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2025 Online Tobacco Store. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default CreativeLayouts;


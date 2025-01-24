// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contacts';
import Products from './Product';
import Home from './Home';
import CreativeLayouts from './CreativeLayouts';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/creative-layouts" element={<CreativeLayouts />} />
            </Routes>
        </Router>
    );
}

export default App;



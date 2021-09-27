import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav className="nav-bar">
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/service">Service</a>
                <a href="/contact">Contact</a>
                
            </nav>
        </div>
    );
};

export default Nav;
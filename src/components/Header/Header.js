import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
    return (
        
        <div className="header text-center">
            <Nav></Nav>
            <h1>IGP International social welfare trust</h1>
            <h5>Developement for the rural peoples and make their life easy </h5>
            <h3>Estimated Budged : 50 Million</h3>
        </div>
    );
};

export default Header;
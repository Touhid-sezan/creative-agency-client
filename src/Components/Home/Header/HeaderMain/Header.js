import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import HeaderBody from '../HeaderBody/HeaderBody';

const Header = () => {
    return (
        <div className="skewed-bg">
            <div className="skew">
                <Navbar></Navbar>
                <HeaderBody></HeaderBody>
            </div>
        </div>
    );
};

export default Header;
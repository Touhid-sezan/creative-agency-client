import React from 'react';
import './Navbar.css';
import logo from '../../../../images/logos/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" id="nav">
            <a class="navbar-brand" href="/"><img src={logo} id="logo" alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact Us</a>
                    </li>
                    
                    <Link to='/logIn' className='link'>
                        <button className="btn bg-dark text-white">Login</button>
                    </Link>
                </ul>
                    
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import './HeaderBody.css';
import HeaderFrame from '../../../../images/logos/HeaderFrame.png';
import { Link } from 'react-router-dom';


const HeaderBody = () => {
    return (
        <div className="row" id="header-body">
                <div className="col-md-5 mt-5">
                    <h1>Let's Grow Your <br/>Brand To The <br/>Next Level </h1>
                    <p className="header-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni impedit dicta aspernatur ratione consequatur quaerat!</p>
                    <Link to='/placeOrder'><button className="btn bg-dark text-white">Hire us</button></Link>
                </div>
                <div className="col-md-7">
                    <img src={HeaderFrame} style={{width:'100%'}} alt=""/>
                </div>
            </div>
    );
};

export default HeaderBody;
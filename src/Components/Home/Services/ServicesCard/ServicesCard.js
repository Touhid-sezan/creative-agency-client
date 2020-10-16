import React from 'react';
import './ServiceCard.css';

const ServicesCard = ({service}) => {
    return (
        <div className="container row">
            <div className="service">
                <div className="img-box">
                    <img src={service.img} alt=""/>
                </div>
                <div className="content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
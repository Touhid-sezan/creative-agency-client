import React from 'react';
import './Clients.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';




const Clients = () => {
    return (
        <div className="d-flex justify-content-center client">
            <div className="row w-75 mt-5 mb-5">
                <div className="col-md-4 col-lg-2">
                    <img className="client-img" src={slack} alt=""/>
                </div>
                <div className="col-md-4 col-lg-2">
                    <img className="client-img" src={google} alt=""/>
                </div>
                <div className="col-md-4 col-lg-2">
                    <img className="client-img" src={uber} alt=""/>
                </div>
                <div className="col-md-4 col-lg-2">
                    <img className="client-img" src={netflix} alt=""/>
                </div>
                <div className="col-md-4 col-lg-2">
                    <img className="client-img" src={airbnb} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Clients;
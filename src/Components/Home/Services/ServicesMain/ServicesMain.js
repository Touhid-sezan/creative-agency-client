import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';

const ServicesMain = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://radiant-refuge-31272.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <Fragment><h2>Provide awesome <span>services</span></h2>
        <Link to='/placeOrder' style={{textDecoration: 'none'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            {
                service.map(service => <ServicesCard service={service}></ServicesCard>)
            }
        </div>
        </Link>
        </Fragment>
    );
};

export default ServicesMain;
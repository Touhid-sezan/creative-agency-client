import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import logo from '../../../images/logos/logo.png';
import cart from '../../../images/logos/cart.png';
import serviceList from '../../../images/logos/serviceList.png';
import review from '../../../images/logos/review.png';
import addIcon from '../../../images/logos/plus 1.png';
import adminIcon from '../../../images/logos/admin.png';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://radiant-refuge-31272.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-6 py-5 px-4" style={{ height: "50vh" }}>
            <Link to="/" >
                <img src={logo} style={{ width: "80%", marginBottom: "20px" }} alt="" />
            </Link>

            <ul className="list-unstyled">
                <li style={{ padding: "20px" }}>
                    <Link to="/placeOrder" >
                        <img style={{ marginRight: "10px" }} src={cart} alt="" /><span>Order</span>
                    </Link>
                </li>
                <li style={{ padding: "20px" }}>
                    <Link to="/services" >
                        <img style={{ marginRight: "10px" }} src={serviceList} alt="" /><span>Service List</span>
                    </Link>
                </li>
                <li style={{ padding: "20px" }}>
                    <Link to="/makeReview" style={{ color: "green" }} >
                        <img style={{ marginRight: "10px" }} src={review} alt="" /><span>Review</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li style={{ padding: "20px" }}>
                        <Link to="/addService" >
                            <img style={{ marginRight: "10px" }} src={addIcon} alt="" /><span>Add Service</span>
                        </Link>
                    </li>
                    <li style={{ padding: "20px" }}>
                        <Link to="/makeAdmin" >
                            <img style={{ marginRight: "10px" }} src={adminIcon} alt="" /><span>Make Admin</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" > <span style={{ padding: "20px" }}>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;
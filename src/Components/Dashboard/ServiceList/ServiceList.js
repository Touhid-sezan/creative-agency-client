import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../SharedComponents/SideBar/SideBar';
import ServiceTable from './ServiceTable';

const OrderList = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    fetch('http://localhost:5000/serviceOrdersByEmail', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=> res.json())
        .then(data => setOrder(data))


    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">My Services</h5>
                <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
            {
                    order.map(order => <ServiceTable order={order}></ServiceTable>)
                }
            </tbody>
        </table>
                
            </div>
        </section>
    );
};

export default OrderList;
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../SharedComponents/SideBar/SideBar';
import uploader from '../../../images/logos/upload.png';
import './PlaceOrder.css';
import { UserContext } from '../../../App';

const PlaceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/serviceOrders', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        alert('Orders send successfully, we will contact with you soon');
        window.location.reload();
    }
    return (
        <section className="row">
            <SideBar></SideBar>
            <div className="col-md-10 col-sm-6 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h4>Welcome {loggedInUser.name}, Please describe what kind of service you want.</h4>
                <h5>Order</h5>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/Company name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="service" placeholder="Graphic Design" className="form-control" />
                        {errors.service && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="details" placeholder="Project Details" className="form-control" style={{height:"120px"}} />
                        {errors.details && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <input ref={register({ required: true })} className="form-control" name="price" placeholder="Budget price" type="number" />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-6">
                            <input id="upload" className="form-control" name="file" type="file" hidden/>
                            <label for="upload"><img src={uploader} alt=""/></label>
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-secondary">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PlaceOrder;
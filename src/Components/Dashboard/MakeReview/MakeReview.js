import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../SharedComponents/SideBar/SideBar';

const MakeReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://radiant-refuge-31272.herokuapp.com/reviews', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }
    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Make a review</h5>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/Company name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="designation" placeholder="Designation" className="form-control" />
                        {errors.designation && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="comment" placeholder="Descriptions" className="form-control" style={{height:"120px"}} />
                        {errors.comment && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-secondary">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeReview;
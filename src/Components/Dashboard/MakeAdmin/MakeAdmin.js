import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../SharedComponents/SideBar/SideBar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://radiant-refuge-31272.herokuapp.com/admins', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        alert('New admin set successfully');
        window.location.reload();
    }
    return (
        <section className="row">
            <SideBar></SideBar>
            <div className="col-md-10 col-sm-6 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5>Make Admin</h5>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                    <label style={{border: 'none'}} htmlFor="email">Email</label>
                        <input type="email" ref={register({ required: true })} name="email" placeholder="Email" id="email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-secondary">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;
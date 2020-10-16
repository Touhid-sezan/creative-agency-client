import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../SharedComponents/SideBar/SideBar';
import uploader from '../../../images/logos/upload.png';


const AddService = () => {
    const { register, errors } = useForm();
    const [serviceData, setServiceData] = useState({});
    const [serviceFile, setServiceFile] = useState(null);
    const handleBlur = e => {
        const newServiceData = { ...serviceData }
        newServiceData[e.target.name] = e.target.value
        setServiceData(newServiceData);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setServiceFile(newFile);
    }


    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('serviceFile', serviceFile);
        formData.append('name', serviceData.name);
        formData.append('description', serviceData.description);


        fetch('https://radiant-refuge-31272.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a service</h5>
                <form className="p-5" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label style={{ border: 'none' }} htmlFor="name">Service Title</label>
                        <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="name" placeholder="Service Title" id="name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <label style={{ border: 'none' }} htmlFor="description">Description</label>
                        <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="description" placeholder="Description" className="form-control" style={{ height: "120px" }} />
                        {errors.description && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <input onChange={handleFileChange} ref={register} id="upload" className="form-control" name="file" type="file" hidden />
                            <label for="upload"><img src={uploader} alt="" /></label>
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

export default AddService;
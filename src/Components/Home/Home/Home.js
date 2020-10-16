import React from 'react';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderMain/Header';
import ReviewMain from '../Reviews/ReviewMain/ReviewMain';
import ServicesMain from '../Services/ServicesMain/ServicesMain';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <ServicesMain></ServicesMain>
            <Slider></Slider>
            <ReviewMain></ReviewMain>
            <Footer></Footer>
        </div>
    );
};

export default Home;
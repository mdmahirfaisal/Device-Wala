import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <AboutUs></AboutUs>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;
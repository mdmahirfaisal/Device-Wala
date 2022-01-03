import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
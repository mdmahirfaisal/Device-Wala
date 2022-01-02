import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
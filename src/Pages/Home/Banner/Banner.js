import React from 'react';
import './Banner.css';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div id='home'>
            <Carousel fade>
                <Carousel.Item>
                    <div className="slide1">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-5">
                                </div>

                                <div className="col-12 col-md-7">
                                    <div className=" banner-text" style={{ marginTop: '50%' }}>
                                        <Fade right duration={500} distance="50px"><h5 className="text-light text-start">DELTA SNAPDRAGON PROCESSOR</h5></Fade>
                                        <Fade left duration={500} distance="50px">  <h1 className="text-light text-start "> FULL SCREEN DISPLAY</h1></Fade>
                                        <Fade bottom duration={500} distance="100px">   <p className="text-light text-start"><i>The Samsung Galaxy S6 had a slender metal body, more beautiful and more premium than the utilitarian, plasticy Galaxy S5 that came before it. The internal code name for the phone was Project Zero, because Samsung threw the Galaxy S playbook out of the window and started from scratch.</i></p></Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-7">
                                    <div className=" banner-text" style={{ marginTop: '50%' }}>
                                        <Fade left duration={500} distance="50px"><h5 className="text-dark text-start"> 4K RESOLUTION</h5></Fade>
                                        <Fade right duration={500} distance="50px">  <h1 className="text-dark text-start ">EXCLUSIVE STEEL FRAME</h1></Fade>
                                        <Fade bottom duration={500} distance="100px">   <p className="text-dark text-start"><i>First, the glass back was glued in place, meaning that the battery was no longer user-accessible. The S6 wasn't even water resistant like the Galaxy S5 was, that one had an IP67 rating and a removable back cover (and flap over its USB port, but that wasn't its biggest issue).</i></p></Fade>
                                    </div>
                                </div>

                                <div className="col-12 col-md-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-5">
                                </div>


                                <div className="col-12 col-md-7">
                                    <div className=" banner-text" style={{ marginTop: '50%' }}>
                                        <Fade left duration={500} distance="50px"><h5 className="text-light text-start"> ZANIA BLACK EDITION</h5></Fade>
                                        <Fade right duration={500} distance="50px">  <h1 className="text-light text-start ">CURVY BEVEL DUAL AUDIO</h1></Fade>
                                        <Fade bottom duration={500} distance="100px">   <p className="text-light text-start"><i>There were other inexplicable downgrades. The battery was smaller (2,550mAh vs. 2,800mAh), a side effect of the decision to shave down the phone's thickness just 6.8 mm. Also, this made people worry more about the battery aging, since it would reduce the already small capacity.</i></p></Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default Banner;
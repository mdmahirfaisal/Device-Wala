import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>SCIC Team Form Programming Hero</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>+880 01928646555</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>rjmahir.faisal@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <HashLink to="/home#home"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></HashLink>
                                    </div>
                                    <div className="footer-text">
                                        <p>In the PRINCE2 project management method, a product description (PDD) is a structured format that presents information about a project product.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <HashLink to="/home#home"><i className="fab fa-facebook-f facebook-bg"></i></HashLink>
                                        <HashLink to="/home#home"><i className="fab fa-twitter twitter-bg"></i></HashLink>
                                        <HashLink to="/home#home"><i className="fab fa-google-plus-g google-bg"></i></HashLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul className='ul-link'>
                                        <li><HashLink to="/home#home">Home</HashLink></li>
                                        <li><HashLink to="/home#home">about</HashLink></li>
                                        <li><HashLink to="/home#home">services</HashLink></li>
                                        <li><HashLink to="/home#home">portfolio</HashLink></li>
                                        <li><HashLink to="/home#home">Contact</HashLink></li>
                                        <li><HashLink to="/home#home">About us</HashLink></li>
                                        <li><HashLink to="/home#home">Our Services</HashLink></li>
                                        <li><HashLink to="/home#home">Expert Team</HashLink></li>
                                        <li><HashLink to="/home#home">Contact us</HashLink></li>
                                        <li><HashLink to="/home#home">Latest News</HashLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved <HashLink to="/home#home">Device Wala</HashLink></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul className='ul-link'>
                                        <li><HashLink to="/home#home">Home</HashLink></li>
                                        <li><HashLink to="/home#home">Terms</HashLink></li>
                                        <li><HashLink to="/home#home">Privacy</HashLink></li>
                                        <li><HashLink to="/home#home">Policy</HashLink></li>
                                        <li><HashLink to="/home#home">Contact</HashLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>SCIC Team Form Programming Hero</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>+880 01929XXXXXX</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>rjmahir.faisal@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href=""><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>In the PRINCE2 project management method, a product description (PDD) is a structured format that presents information about a project product.</p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href=""><i class="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href=""><i class="fab fa-twitter twitter-bg"></i></a>
                                        <a href=""><i class="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul className='ul-link'>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">about</a></li>
                                        <li><a href="">services</a></li>
                                        <li><a href="">portfolio</a></li>
                                        <li><a href="">Contact</a></li>
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Our Services</a></li>
                                        <li><a href="">Expert Team</a></li>
                                        <li><a href="">Contact us</a></li>
                                        <li><a href="">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved <a href="">Device Wala</a></p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul className='ul-link'>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
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
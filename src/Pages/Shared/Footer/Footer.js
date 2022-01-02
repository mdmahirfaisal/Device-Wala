import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className='mt-5'>
            <div className="footer-gray">
                <div className="footer-custom">
                    <div className="footer-lists">
                        <div className="footer-list-wrap">
                            <h6 className="ftr-hdr">Order Toll Free</h6>
                            <ul className="ftr-links-sub">
                                <li>+880 01928646555</li>
                            </ul>
                            <h6 className="ftr-hdr">International</h6>
                            <ul className="ftr-links-sub">
                                <li><HashLink to="/home#home">France</HashLink></li>
                                <li><HashLink to="/home#home">United Kingdom</HashLink></li>
                            </ul>
                        </div>
                        <div className="footer-list-wrap">
                            <h6 className="ftr-hdr">Customer Service</h6>
                            <ul className="ftr-links-sub">
                                <li><HashLink to="/home#home">Contact us</HashLink></li>
                                <li><HashLink to="/home#home">Ordering</HashLink></li>
                                <li><HashLink to="/home#home">Shipping &amp; Delivery</HashLink></li>
                                <li><HashLink to="/home#home">Returns</HashLink></li>
                                <li><HashLink to="/home#home">International order</HashLink></li>
                                <li><HashLink to="/home#home">Gift Cards</HashLink></li>
                                <li><HashLink to="/home#home">Faqs</HashLink></li>
                            </ul>
                        </div>
                        <div className="footer-list-wrap">
                            <h6 className="ftr-hdr">About electro house.com</h6>
                            <ul className="ftr-links-sub">
                                <li><HashLink to="/home#home">Our Company</HashLink></li>
                                <li><HashLink to="/home#home">Careers</HashLink></li>
                                <li><HashLink to="/home#home">Electro house Showroom</HashLink></li>
                                <li><HashLink to="/home#home">Business &amp; Trade Sales</HashLink></li>
                                <li><HashLink to="/home#home">Affiliate Program</HashLink></li>
                                <li><HashLink to="/home#home"><strong>Shop Our Catalog</strong></HashLink></li>
                                <li><HashLink to="/home#home">Electro House BLOG</HashLink></li>
                            </ul>
                        </div>
                        <div className="footer-list-wrap">
                            <h6 className="ftr-hdr">My Account</h6>
                            <ul className="ftr-links-sub">
                                <p >
                                    <li className="ftr-Login"><span className="link login-trigger">Access My Account</span></li>
                                    <li><span className="">Track My Order</span></li>
                                </p>
                                <p >
                                    <li className="ftr-Login"><span className="link ftr-access-my-account">Access My Account</span></li>
                                    <li><span className="" >Track My Order</span></li>
                                </p>
                            </ul>
                        </div>

                    </div>
                    <div className="footer-email">
                        <h6 className="ftr-hdr">Sign up for exclusive offers and inspiration</h6>
                        <div id="ftr-email" className="ftr-email-form">
                            <form id="ftrEmailForm" method="post" action="http://em.art.com/pub/rf">
                                <div className="error">Please enter a valid email address</div>
                                <input type="text" name="email_address_" id="ftrEmailInput" className="input" placeholder="Enter email address" />

                                <input type="hidden" className="button" value="SUBMIT" />
                                <input type="hidden" name="country_iso2" value="" />
                                <input type="hidden" name="language_iso2" value="en" />
                                <input type="hidden" name="site_domain" value="mobile bazar.com" />
                                <input type="hidden" name="email_acq_source" value="01-000001" />
                                <input type="hidden" name="email_acq_date" value="" id="ftr-email-date" />
                                <input type="hidden" name="brand_id" value="ART" />
                                <input type="hidden" name="" value="SUBMIT" />
                            </form>
                        </div>

                        <div className="ftr-email-privacy-policy"></div>
                    </div>

                    <div className="footer-social">
                        <h6 className="ftr-hdr">Follow Us</h6>
                        <ul>
                            <li>
                                <HashLink to="/" title="Facebook">
                                    <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png" />
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/" title="Google+" >
                                    <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png" />
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/">
                                    <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png" />
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/">
                                    <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png" />
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/" title="Twitter">
                                    <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png" />
                                </HashLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-legal">
                        <p>&copy; electro house.com Inc. All Rights Reserved. | <HashLink to="/" >Privacy Policy</HashLink> | <HashLink to="/" >Terms of Use</HashLink> | <HashLink to="/" >Terms of Sale</HashLink></p>
                        <p>mobile and Photos [to] mobile are trademarks or registered trademarks of Mobil bazar.com Inc.</p>
                        <p>Various aspects of this website are covered by issued US patent No. 7,973,796 and other pending patent applications.</p>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
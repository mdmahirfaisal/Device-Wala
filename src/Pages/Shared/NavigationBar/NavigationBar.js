import * as React from 'react';
import './NavigationBar.css'
import { Container, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../useMediaQuery/useMediaQuery';



const NavigationBar = () => {

    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);

    const isMobile = useMediaQuery('(max-width: 768px)');


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    const navigate = useNavigate()
    // logout 
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                // logOut()
                navigate('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }


    // pop over 
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null)

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <>
            <header className="dark">
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    variant="light"
                    fixed="top"
                    className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4 bg-white"}>
                    <Container>

                        <Navbar.Brand
                            as={HashLink} to="/"
                            className="ml-md-5"
                            style={{ color: "#3a4256", fontSize: "1.55rem" }}>
                            <img
                                alt="Logo"
                                src="https://i.ibb.co/GQ92S57/logo-removebg-preview.png"
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />{'   '}
                            <strong>Device Wala</strong>
                        </Navbar.Brand>
                        <Nav>
                            <a href="#;" className="ic menu" tabIndex="1">
                                <span className="line"></span>
                                <span className="line "></span>
                                <span className="line "></span>
                            </a>
                            <a href="#;" className="ic close"></a>
                            <ul className="main-nav">
                                <li className="top-level-link">
                                    <HashLink to="/home#home" className={isMobile ? 'text-light text-decoration-none' : 'text-dark text-decoration-none'}><span>Home</span></HashLink>
                                </li>

                                <li className="top-level-link">
                                    <a className={isMobile ? "mega-menu text-light text-decoration-none" : "mega-menu text-dark text-decoration-none"}><span>Products</span></a>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Clothing</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><a>Mens</a></li>
                                                    <li><a>Womens</a></li>
                                                    <li><a>Kids</a></li>
                                                    <li><a>New Born</a></li>
                                                    <li><a>View All</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Handbags</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><a>Wallets</a></li>
                                                    <li><a>Athletic bag</a></li>
                                                    <li><a>Backpack</a></li>
                                                    <li><a>Bucket Bag</a></li>
                                                    <li><a>View All</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Shoes</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><a>Mens</a></li>
                                                    <li><a>Womens</a></li>
                                                    <li><a>Kids</a></li>
                                                    <li><a>View All</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li className="top-level-link">
                                    <a className={isMobile ? "mega-menu text-light text-decoration-none" : "mega-menu text-dark text-decoration-none"}><span>About</span></a>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Company</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><a>About</a></li>
                                                    <li><a>Mission</a></li>
                                                    <li><a>Community</a></li>
                                                    <li><a>Team</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Media</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><a>News</a></li>
                                                    <li><a>Events</a></li>
                                                    <li><a>Blog</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Careers</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><a>New Opportunities</a></li>
                                                    <li><a>Life @ Company</a></li>
                                                    <li><a>Why Join Us?</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li className="top-level-link">
                                    <HashLink to="/home#home" className={isMobile ? 'text-light text-decoration-none' : 'text-dark text-decoration-none'}><span>Contact</span></HashLink>
                                </li>
                            </ul>
                        </Nav>

                        {!isMobile && <Nav className='ms-auto '>
                            <div ref={ref}>
                                <h1 onClick={handleClick} style={{ cursor: 'pointer' }}><i className="fas fa-user-circle"></i></h1>

                                <Overlay
                                    show={show}
                                    target={target}
                                    placement="bottom"
                                    container={ref}
                                    containerPadding={20}
                                >
                                    <Popover id="popover-contained" className='border-0 bg-light shadow'>
                                        <Popover.Header className='border-0' > <h5 className='text-center text-primary'>user.displayName</h5></Popover.Header>
                                        <Popover.Body>
                                            <p>user.email</p>
                                            <button onClick={handleLogout} className='btn btn-outline-danger px-5 w-100 py-0 rounded-pill text-center mx-auto mb-3'>Logout</button>
                                        </Popover.Body>
                                    </Popover>
                                </Overlay>
                            </div>
                        </Nav>}
                    </Container>
                </Navbar>

            </header>
        </>
    );
};

export default NavigationBar;
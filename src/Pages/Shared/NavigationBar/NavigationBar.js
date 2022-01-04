import * as React from 'react';
import './NavigationBar.css'
import { Container, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../useMediaQuery/useMediaQuery';
import useAuth from '../../../hooks/useAuth';



const NavigationBar = () => {
    const { user, logOut } = useAuth();

    const [isSticky, setSticky] = React.useState(false);
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
                logOut()
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
                    className={(isSticky) ? "shadow-sm bg-white py-2" : "py-4 bg-white"}>
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
                            <a href="" className="ic close"></a>
                            <ul className="main-nav">
                                <li className="top-level-link">

                                    <HashLink to="/home#home" className={isMobile ? 'text-light text-decoration-none' : 'text-dark text-decoration-none'}><span>Home</span></HashLink>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            <div className="col">
                                                <h2 className="sub-menu-head">Home</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link>About</Nav.Link></li>
                                                    <li><Nav.Link>Products</Nav.Link></li>
                                                    <li><Nav.Link>Contact</Nav.Link></li>
                                                    <li><Nav.Link>New Born</Nav.Link></li>
                                                    <li><Nav.Link>View All</Nav.Link></li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li className="top-level-link">
                                    <Nav.Link className={isMobile ? "mega-menu text-light text-decoration-none" : "mega-menu text-dark text-decoration-none"}><span>Products</span></Nav.Link>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Clothing</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link>Mens</Nav.Link></li>
                                                    <li><Nav.Link>Womens</Nav.Link></li>
                                                    <li><Nav.Link>Kids</Nav.Link></li>
                                                    <li><Nav.Link>New Born</Nav.Link></li>
                                                    <li><Nav.Link>View All</Nav.Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Handbags</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link>Wallets</Nav.Link></li>
                                                    <li><Nav.Link>Athletic bag</Nav.Link></li>
                                                    <li><Nav.Link>Backpack</Nav.Link></li>
                                                    <li><Nav.Link>Bucket Bag</Nav.Link></li>
                                                    <li><Nav.Link>View All</Nav.Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Shoes</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link>Mens</Nav.Link></li>
                                                    <li><Nav.Link>Womens</Nav.Link></li>
                                                    <li><Nav.Link>Kids</Nav.Link></li>
                                                    <li><Nav.Link>View All</Nav.Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li className="top-level-link">
                                    <Nav.Link className={isMobile ? "mega-menu text-light text-decoration-none" : "mega-menu text-dark text-decoration-none"}><span>About</span></Nav.Link>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Company</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link>About</Nav.Link></li>
                                                    <li><Nav.Link>Mission</Nav.Link></li>
                                                    <li><Nav.Link>Community</Nav.Link></li>
                                                    <li><Nav.Link>Team</Nav.Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Media</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link>News</Nav.Link></li>
                                                    <li><Nav.Link>Events</Nav.Link></li>
                                                    <li><Nav.Link>Blog</Nav.Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head">Careers</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link>New Opportunities</Nav.Link></li>
                                                    <li><Nav.Link>Life @ Company</Nav.Link></li>
                                                    <li><Nav.Link>Why Join Us?</Nav.Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li className="top-level-link">
                                    <HashLink to="/home#home" className={isMobile ? 'text-light text-decoration-none' : 'text-dark text-decoration-none'}><span>Contact</span></HashLink>
                                </li>
                                <li className="top-level-link">
                                    <HashLink to="/dashboard" className={isMobile ? 'text-light text-decoration-none' : 'text-dark text-decoration-none'}><span>Dashboard</span></HashLink>
                                </li>
                            </ul>
                        </Nav>

                        <Nav className='ms-auto'>
                            {!user.email && <Nav.Link as={HashLink} to="/login" className={isMobile ? 'text-decoration-none me-5' : 'text-decoration-none ms-auto'} >
                                <button className='btn btn-outline-danger py-0 rounded-pill px-3'>Login</button>
                            </Nav.Link>
                            }
                            {user.email && <div ref={ref}>
                                <h1 onClick={handleClick} className={isMobile ? 'me-5 ' : ' ms-auto'} style={{ cursor: 'pointer' }}><i className="fas fa-user-circle"></i></h1>
                                <Overlay
                                    show={show}
                                    target={target}
                                    placement="bottom"
                                    container={ref}
                                    containerPadding={20}
                                >
                                    <Popover id="popover-contained" className='border-0 bg-light shadow'>
                                        <Popover.Header className='border-0' > <h5 className='text-center text-primary'>{user.displayName}</h5></Popover.Header>
                                        <Popover.Body>
                                            <p>{user.email}</p>
                                            <button onClick={handleLogout} className='btn btn-outline-danger px-5 w-100 py-0 rounded-pill text-center mx-auto mb-3'>Logout</button>
                                        </Popover.Body>
                                    </Popover>
                                </Overlay>
                            </div>}
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default NavigationBar;
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
            {/* <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm nav-bg-color py-2" : "py-4"}>
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
                        <strong>ELECTRO HOUSE</strong>
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="ml-auto">
                            <Nav.Link as={HashLink} to="/home" className="mr-md-5" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home"
                                className="mr-md-5" active>
                                Parts
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home"
                                className="mr-md-5" active>
                                Raise
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#products"
                                className="mr-md-5" active>
                                Products
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#details"
                                className="mr-md-5" active>
                                Info
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home"
                                className="mr-md-5" active>
                                Reviews
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home"
                                className="mr-md-5" active>
                                Contact Us
                            </Nav.Link> */}


            {/* {user.email && <Nav.Link
                                as={HashLink}
                                to="/dashboard/"
                                className="mr-md-5" active>
                                Dashboard
                            </Nav.Link>} */}

            {/* </Nav>
                        <Nav className='ms-auto '>

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

                            {isMobile ? <Nav.Link as={HashLink}
                                to="/login"
                                className=' btn btn-outline-danger py-0 px-3 rounded-pill text-center mx-auto mb-2'>
                                Login
                            </Nav.Link> :
                                <Nav.Link as={HashLink}
                                    to="/"
                                    className='login-button text-center mx-auto mb-3'>
                                    Login
                                </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isSticky && <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="bottom"
            >
                <Nav.Link className='up-arrow fs-5  rounded-pill text-decoration-none ms-auto me-4 mb-5' as={HashLink} to="/home"><i className="fas fa-arrow-up"></i></Nav.Link>
            </Navbar>} */}

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
                            <strong>ELECTRO HOUSE</strong>
                        </Navbar.Brand>
                        <Nav>
                            <a href="javascript:void(0);" className="ic menu" tabindex="1">
                                <span className="line"></span>
                                <span className="line "></span>
                                <span className="line "></span>
                            </a>
                            <a href="javascript:void(0);" className="ic close"></a>
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
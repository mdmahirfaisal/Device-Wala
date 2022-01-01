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

    const isMobile = useMediaQuery('(max-width: 985px)');


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
            <Navbar
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
                        <strong>Device Wala</strong>
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
                            </Nav.Link>
                            {/* {user.email && <Nav.Link
                                as={HashLink}
                                to="/dashboard/"
                                className="mr-md-5" active>
                                Dashboard
                            </Nav.Link>} */}
                        </Nav>
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
            </Navbar>}
        </>
    );
};

export default NavigationBar;
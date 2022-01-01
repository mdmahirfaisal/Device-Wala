import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className='notfound-body'>
                <div className="notfound-wrapper">
                    <div className="notfound-title" data-content="404">
                        404
                    </div>

                    <div className="notfound-subtitle" data-content="Oops, the page you're looking for doesn't exist">
                        Oops, the page you're looking for doesn't exist.
                    </div>

                    <div className='mt-5'>
                        <Nav.Link as={HashLink}
                            to="/home#home"
                            className='text-decoration-none'>
                            <button className='btn btn-danger w-100 d-block rounded-pill text-center mx-auto mb-3'>Back to home</button>
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
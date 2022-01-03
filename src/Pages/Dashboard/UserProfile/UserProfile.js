import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import './UserProfile.css';

const UserProfile = () => {
    const { user, logOut } = useAuth();

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
    return (
        <div>
            <div className="container" style={{ maxWidth: '650px' }}>
                <div className="our-team shadow" style={{ borderRadius: '15px' }}>
                    <div className="picture">
                        <img className="img-fluid" src={user.photoURL || "https://picsum.photos/130/130?image=1027"} alt='Profile img' />
                    </div>
                    <div className="team-content">
                        <h3 className="name">{user.displayName}</h3>
                        <h4 className="title">{user.email}</h4>
                    </div>
                    <ul className="social">
                        <HashLink to="/home"> <button className="btn btn-info mt-2 rounded-pill w-75 mx-auto">Home</button></HashLink>
                        <button onClick={handleLogout} className="btn btn-danger my-2 rounded-pill w-75 mx-auto">Logout</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
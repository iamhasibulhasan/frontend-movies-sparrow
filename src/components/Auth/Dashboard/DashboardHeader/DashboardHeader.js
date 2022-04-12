import React from 'react';
import './DashboardHeader.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from './../../../../hooks/useAuth';

const DashboardHeader = () => {
    const { logOut, user } = useAuth();


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' className='dashboard-header'>

            <Navbar.Brand as={Link} to="/">
                <img src="https://i.ibb.co/z6BMYGx/logo-sparrow.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto dashboard-link align-items-center">
                    <Nav.Link as={Link} to="/dashboard/admin" className='profile-picture' title='My Profile'>
                        <img src={user.photoURL || 'https://i.ibb.co/9bD2Qj2/149071.png'} alt="" />
                    </Nav.Link>
                    <Nav.Link as={Link} to='' onClick={logOut} title='Logout'><FaSignOutAlt /></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default DashboardHeader;
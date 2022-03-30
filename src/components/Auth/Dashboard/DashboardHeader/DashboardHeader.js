import React from 'react';
import './DashboardHeader.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";

const DashboardHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' className='dashboard-header'>

            <Navbar.Brand as={Link} to="/">
                <img src="https://i.ibb.co/z6BMYGx/logo-sparrow.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto dashboard-link align-items-center">
                    <Nav.Link as={Link} to="/dashboard" className='profile-picture' title='My Profile'>
                        <img src="https://i.ibb.co/88pXx3C/hasibul.jpg" alt="" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="#features" title='Logout'><FaSignOutAlt /></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default DashboardHeader;
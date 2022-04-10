import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    window.onscroll = () => {
        let element = document.getElementById("header");
        let sticky = element.offsetTop || "";
        element.classList.add("mystyle");
        if (window.pageYOffset > sticky) {
            element.classList.add("sticky");
        } else {
            element.classList.remove("sticky");
        }
    }

    return (
        <div id='header' className="header-section">
            <Navbar bg="light" expand="lg" className='header p-0' variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src="https://i.ibb.co/z6BMYGx/logo-sparrow.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-btn' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto header-link">
                            <Nav.Link as={Link} className="nav-link-header" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className="nav-link-header" to="/movies">Movies</Nav.Link>
                            <Nav.Link as={Link} className="nav-link-header" to="/about-us">About Us</Nav.Link>
                            <Nav.Link as={Link} className="nav-link-header" to="/blogs">Blogs</Nav.Link>

                            {
                                user.email ? <NavDropdown title={user.displayName} className="nav-link-header" id="basic-nav-dropdown">

                                    <NavDropdown.Item as={Link} className="nav-link-header" to="/dashboard/admin">Dashboard</NavDropdown.Item>

                                <NavDropdown.Item as={Link} className="nav-link-header" to="/dashboard/myorders">My Orders</NavDropdown.Item>

                                <NavDropdown.Item as={Link} className="nav-link-header" to="/dashboard/manageorders">Manage Orders</NavDropdown.Item>

                                <NavDropdown.Item as={Link} className="nav-link-header" to="/dashboard/addmovies">Add Movies</NavDropdown.Item>

                                <NavDropdown.Item as={Link} className="nav-link-header" to="/dashboard/addblogs">Add Blogs</NavDropdown.Item>

                                    <NavDropdown.Item as={Link} className="nav-link-header" onClick={logOut}>Logout</NavDropdown.Item>
                                </NavDropdown> : <Link to="/join-us" className='join-us-btn'>Join Us</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
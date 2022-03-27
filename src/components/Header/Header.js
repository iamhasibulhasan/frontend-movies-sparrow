import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    window.onscroll = () => {
        let element = document.getElementById("header");
        var sticky = element.offsetTop;
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
                            <Nav.Link as={Link} className="nav-link-header" to="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link as={Link} className="nav-link-header" to="/blogs">Blogs</Nav.Link>
                            <NavDropdown title="Orders" className="nav-link-header" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} className="nav-link-header" to="/my-orders">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} className="nav-link-header" to="/manage-orders">Manage Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} className="nav-link-header" to="/add-movies">Add Movies</NavDropdown.Item>
                            </NavDropdown>
                            <a as={Link} to="/join-us" className='join-us-btn'>Join Us</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
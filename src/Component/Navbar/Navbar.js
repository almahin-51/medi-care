import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';

const Navbars = () => {
    const { user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="md"  variant="dark" className="header-top" sticky="top">
                <Container>
                    <Navbar.Brand href="/home"><img src="https://bit.ly/2YXM4ib" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="nav-link">
                            <Nav.Link as={NavLink} activeStyle={{
                                fontWeight: "bold",
                                color: "#0cb8b6"
                            }} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{
                                fontWeight: "bold",
                                color: "#0cb8b6"
                            }} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{
                                fontWeight: "bold",
                                color: "#0cb8b6"
                            }} to="/contact">Contact us</Nav.Link>

                            {user?.displayName || user?.email ?
                                <Nav.Link onClick={logOut}>Log Out</Nav.Link>:
                                <Nav.Link as={NavLink} activeStyle={{
                                    fontWeight: "bold",
                                    color: "#0cb8b6"
                                }} to="/login">Log In</Nav.Link>}
                            
                            {!user.displayName && <Nav.Link activeStyle={{
                                fontWeight: "bold",
                                color: "#0cb8b6"
                            }} as={NavLink} to="/signup">Sign Up</Nav.Link>}
                        </Nav>
                        <Navbar.Text>
                            {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;
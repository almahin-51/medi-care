import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbars = () => {
    const { user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home"><img src="https://bit.ly/2YXM4ib" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/service">Services</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>

                            {user?.displayName || user?.email ?
                                <Nav.Link onClick={logOut}>Log Out</Nav.Link>:
                                <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                            
                            {!user.displayName && <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>}
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
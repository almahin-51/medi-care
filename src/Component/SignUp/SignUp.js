import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logIn from '../images/login.jpg';

const SignUp = () => {
    const {
        getEmail,
        getPassword,
        handleRegistration,
        error,
        getName
    } = useAuth();
    return (
        <div className="mx-4 my-5">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className="img-fluid" src={logIn} alt="" />
                </Col>
                <Col>
                    <div className="login-logo mx-auto">
                        <i className="fas fa-user-alt"></i>
                    </div>
                    <p className="text-danger text-center">{error}</p>
                    
                    <Form onSubmit={handleRegistration} className="login-from mx-auto mt-5">
                        <Form.Group className="mb-3" controlId="formGriName">
                            <Form.Control onBlur={getName} placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formHorizontalEmail">
                            <Col>
                                <Form.Control onBlur={getEmail} type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHorizontalPassword">
                            <Col>
                                <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Address" />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col className="text-center">
                                <Link to="/login" className="text-primary my-2 d-block">Already have an account?</Link>
                                <Button type="submit" className="w-100 btn-info rounded-0">Sign Up</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default SignUp;
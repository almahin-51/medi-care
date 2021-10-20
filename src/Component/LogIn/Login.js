import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logIn from '../images/login.jpg';
import google from '../images/google.png';
import github from '../images/github.png';
import Fade from 'react-reveal/Fade';
import "./Login.css";

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const {
        signInUsingGoogle,
        signInUsingGithub,
        handleSignIn,
        getPassword,
        getEmail,
        setError,
        error,
        setUser,
        setIsLoading } = useAuth();
    
    const handleSignInWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
                setError("")
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false));
    }
    
    const handleSignInWithGithub = (e) => {
        e.preventDefault();
        signInUsingGithub()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                alert('successfuly loged in')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
    
    const handleSignInUsingEmail = (e) => {
        e.preventDefault()
        handleSignIn()
            .then(() => {
                history.push(redirect_uri)
                alert('successfuly loged in')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div className="container py-5 my-5">
            <Row xs={1} md={2} className="g-4 my-4">
                <Col className="login-banner">
                    <Fade left>
                        <img className="img-fluid" src={logIn} alt="" />
                    </Fade>
                </Col>
                <Col>
                    <Fade right>
                        <div className="login-logo mx-auto">
                            <i class="fas fa-user-alt"></i>
                        </div>

                        <h2 className="fw-bolder text-center mt-4">Log In</h2>

                        <Form onSubmit={handleSignInUsingEmail} className="login-from mx-auto mt-5">
                            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                <Col>
                                    <Form.Control onBlur={getEmail} type="email" required placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHorizontalPassword">
                                <Col>
                                    <Form.Control onBlur={getPassword} required type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <small className="text-danger">{error} </small>

                            <Form.Group className="text-center text-primary" controlId="formGridPassword">
                                <Form.Label className="forget">Forgotten password?</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Button type="submit" className="w-100 card-btn fw-bold rounded-0">Log in</Button>
                            </Form.Group>

                            <Form.Group as={Row} className="my-3 text-center">
                                <Col className="sign-logo">
                                    <img onClick={handleSignInWithGoogle} className="w-50" src={google} alt="" />
                                    <p>Sign In Google</p>
                                </Col>
                                <Col className="sign-logo">
                                    <img onClick={handleSignInWithGithub} className="w-50" src={github} alt="" />
                                    <p>Sign In Github</p>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Fade>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
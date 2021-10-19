import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logIn from '../images/login.jpg';
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
    
    const hadleSignInWithGoogle = () => {
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
        <div className="mx-4 my-5">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className="img-fluid" src={logIn} alt="" />
                </Col>
                <Col>
                    <div className="login-logo mx-auto">
                        <i class="fas fa-user-alt"></i>
                    </div>
                    <Form onSubmit={handleSignInUsingEmail} className="login-from mx-auto mt-5">
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
                        <small className="text-danger">{error} </small>

                        <Form.Group className="text-center text-primary" controlId="formGridPassword">
                            <Form.Label className="forget">Forgotten password?</Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3">
                                <Button type="submit" className="w-100 btn-info rounded-0">Log in</Button>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3">
                            <Col> 
                                <Button onClick={hadleSignInWithGoogle} className="w-100 btn-info rounded-0 mb-3">Google Sign In</Button>
                            </Col>
                            <Col>
                                <Button onClick={handleSignInWithGithub} className="w-100 btn-info rounded-0 mb-2">Github Sign In</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
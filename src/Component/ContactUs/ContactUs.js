import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './ContactUs.css';


const ContactUs = () => {
    return (
        <div className="container my-5 py-5">
            <h5 className="contact-sub-title"><small>Contact us anytime</small></h5>
            <h1 className="contact-title fw-bolder mb-4">SEND US YOUR COMMENTS</h1>
            
            <Row className="g-5">
                <Col xs={12} md={7} className="mb-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button variant="info" className="text-light fw-bold rounded-0 px-3 py-2 mt-4">SUBMIT FORM</Button>
                    </Form>
                </Col>
                <Col xs={12} md={5}>
                    <div className="d-flex">
                        <div className="contact-icons">
                            <i class="far fa-hospital"></i>
                        </div>
                        <div>
                            <h5>EMERGENCY CONTACT</h5>
                            <p className="m-0"><small>Free call 24/7</small></p>
                            <p className="m-0"><small>+1555 6761 020</small></p>
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="contact-icons">
                            <i class="far fa-hospital"></i>
                        </div>
                        <div>
                            <h5>HOME VISIT</h5>
                            <p className="m-0"><small>Chargeable call 24/7</small></p>
                            <p className="m-0"><small>+1777 6761 050</small></p>
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="contact-icons">
                            <i class="far fa-hospital"></i>
                        </div>
                        <div>
                            <h5>EMERGENCY CONTACT</h5>
                            <p className="m-0"><small>Within working hours</small></p>
                            <p className="m-0"><small>+0800 2336 7811</small></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    );
};

export default ContactUs;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';

const About = () => {
    return (
        <div className="my-5 py-5">
            <div className="about-section">
                <Fade top>
                    <div className="text-center">
                        <h1 className="fs-1 fw-bolder text-light mt-4">About Us</h1>
                        <h1 className="fs-2 fw-bolder text-light mt-4">GENERAL INFO</h1>
                    </div>
                </Fade>
            </div>
            <Container>
                <div className="mx-3 pt-5">
                    <Fade left>
                        <h5 className="contact-sub-title mt-4"><small>What we stand for</small></h5>
                        <h1 className="contact-title fw-bolder mb-4">OUR VALUES</h1>
                    </Fade>
                    <Row xs={1} md={2} lg={3}>
                        <Fade left>
                            <Col>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <img src={one} alt="" />
                                    </div>
                                    <div>
                                        <h4>DOCTOR YOU CHOOSE</h4>
                                        <p><small>Choosing a new doctor can be a challenge, especially if you have moved to a new community. Asking for recommendations from co-workers.</small></p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <img src={two} alt="" />
                                    </div>
                                    <div>
                                        <h4>YOUR HEALTHCARE</h4>
                                        <p><small>We are proud of delivering patient-led, high quality health and social care community services for residents in Kingston & Richmond as part of the NHS</small></p>
                                    </div>
                                </div>
                            </Col>
                        </Fade>
                        <Fade bottom>
                            <Col>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <img src={three} alt="" />
                                    </div>
                                    <div>
                                        <h4>ALWAYS THERE FOR YOU</h4>
                                        <p><small>Mauris commodo lacinia nisi a fermentum. Donec risus magna, fringilla laoreet ullamcorper in, lobortis semper enim.</small></p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <img src={four} alt="" />
                                    </div>
                                    <div>
                                        <h4>NURSING STAFF</h4>
                                        <p><small>Directorate of Nursing Services · 200 post of Staff Nurse has been created · 1971 Staff Nurses employed · Proposal submitted to the MOH&FW for increased the pay</small></p>
                                    </div>
                                </div>
                            </Col>
                        </Fade>
                        <Fade right>
                            <Col>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <img src={five} alt="" />
                                    </div>
                                    <div>
                                        <h4>EMERGENCY SERVICES</h4>
                                        <p><small>Emergency service · Police — law enforcement, criminal investigation, and maintenance of public order. · Fire and Rescue Services — fire suppression, technical </small></p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <img src={six} alt="" />
                                    </div>
                                    <div>
                                        <h4>PREMIUM FACILITIES</h4>
                                        <p><small>Complete facilities solutions for your workplace, office or institution.Premium Facility Services is a total facility maintenance company based in New</small></p>
                                    </div>
                                </div>
                            </Col>
                        </Fade>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row xs={1} md={2} lg={4} className="g-4 py-5">
                    <Col>
                        <img className="img-fluid mb-3" src={'https://bit.ly/3BOOmyJ'} alt="" />
                        <p>Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.</p>
                    </Col>
                    <Col>
                        <h3>Recent Posts</h3>
                        <div className="d-flex mt-4">
                            <img className="footer-img-logo" src={'https://bit.ly/2XnVCCG'} alt="" />
                            <div className="reset-post ms-2">
                                <small>OCTOBER 18, 2021</small>
                                <p>2015 Best USA Hospitals and Clinics</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img className="footer-img-logo" src={'https://bit.ly/3DQqtHF'} alt="" />
                            <div className="reset-post ms-2">
                                <small>SEPTEMBER 22, 2021</small>
                                <p>Are drugs the best solution?</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h3>Recent Posts</h3>
                        <div className="d-flex mt-4">
                            <img className="footer-img-logo" src={'https://bit.ly/3aSlYQt'} alt="" />
                            <div className="reset-post ms-2">
                                <p>Waiting Room Chairs</p>
                                <small>15.00$</small>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img className="footer-img-logo" src={'https://bit.ly/3pfaDlK'} alt="" />
                            <div className="reset-post ms-2">
                                <p>Special Weight scale</p>
                                <small>15.00$</small>
                            </div>
                        </div>
                    </Col>
                    <Col className="footer-service">
                        <h3 className="mb-4">Our services</h3>
                        <p>Appointments</p>
                        <p>Working hours</p>
                        <p>Cost calculator</p>
                        <p>Procedures</p>
                        <p>Special offers</p>
                        <p>Testimonials</p>
                    </Col>
                </Row>
            </Container>
            <div className="copy-right">
                <p>Copyright by Mahin. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
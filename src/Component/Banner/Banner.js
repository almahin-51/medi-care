import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner mb-5">
            <Carousel fade indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://bit.ly/2XpzLuI"
                        alt="First slide"
                    />
                    <div className="banner-top-details-One">
                        <h1 className="banner-title">THE <span style={{ color: "#0cb8b6"}}>RIGHT</span> <br /> PEDIATRICIAN</h1>
                        <p className="text-justify banner-des">We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                        <div className="mini-details">
                            <div className="d-flex">
                                <div className="d-flex">
                                    <div className="icon">
                                        <i className="fab fa-airbnb"></i>
                                    </div>
                                    <div className="details">
                                        <h6>HEALTHY ADVICES</h6>
                                        <p><small>Praesent convallis tortor et enim laoreet.</small></p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <h6>ALWAYS AVAILABLE</h6>
                                        <p><small>Donec malesuada nunc non venenatis.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://bit.ly/3jcmhdf"
                        alt="Second slide"
                    />

                    <div className="banner-top-details-two">
                        <h1 className="banner-title">YOU AND <br /><span style={{ color: "#0cb8b6" }}>YOUR DOCTOR</span></h1>
                        <p className="text-justify banner-des">Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                        <div className="mini-details">
                            <div className="d-flex">
                                <div className="d-flex">
                                    <div className="icon">
                                        <i className="fab fa-cloudsmith"></i>
                                    </div>
                                    <div className="details">
                                        <h6>REGULAR CHECKUPS</h6>
                                        <p><small>Praesent convallis tortor et enim laoreet, consectetur.</small></p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <h6>ALWAYS AVAILABLE</h6>
                                        <p><small>Morbi sed maximus libero. Nunc lacinia fermentum leo.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div>
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-0">
                        <Col>
                            <div className="details-card card-1">
                                <h5>Professional staff</h5>
                                <p>Select the doctor you prefer and book a visit with him or her in a matter of minutes.</p>
                                <button className="my-btn">Read More</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="details-card card-2">
                                <h5>Affordable prices</h5>
                                <p>Aliquam sit amet porttitor ex, sit amet pellentesque nibh. Praesent viverra dui augue.</p>
                                <button className="my-btn">Read More</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="details-card card-3">
                                <h5>Insurance partners</h5>
                                <p>Praesent cursus ligula elit, vitae ullamcorper felis sodales non. Suspendisse ut hendrerit.</p>
                                <button className="my-btn">Read More</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="details-card">
                                <h5>Consult our doctors</h5>
                                <p>Select the doctor you prefer and book a visit with him or her in a matter of minutes.</p>
                                <button className="my-btn">Read More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;
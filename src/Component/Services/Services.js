import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Fade from 'react-reveal/Fade';
import './Services.css';

const Services = (props) => {
    console.log(props)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
        
    }, [])
    return (
        <Fade bottom>
            <div className="mb-5 pb-5">
                <div className="service-header">
                    <h1 className="services-title mt-5 fw-bolder py-4">Our Services</h1>
                </div>
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-4 mx-4">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </Row>
                </Container>
            </div>
        </Fade>
    );
};

export default Services;
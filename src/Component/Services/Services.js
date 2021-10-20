import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Service from '../Service/Service';
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
        <div className="mb-5 pb-5 container">
            <h1 className="services-title mt-5 fw-bolder py-4">Our Services</h1>
            <Row xs={1} md={2} lg={4} className="g-4 mx-4">

                {props.props ?
                    (services.slice(0, 4).map(service => <Service key={service.id} service={service}></Service>))
                    :
                    (services.map(service => <Service key={service.id} service={service}></Service>))
                }
            </Row>
        </div>
    );
};

export default Services;
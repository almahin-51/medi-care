import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
        
    }, [])
    return (
        <>
            <h1>Our Services</h1>
            <Row xs={1} md={2} lg={4} className="g-4 mx-4">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </>
    );
};

export default Services;
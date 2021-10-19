import React, { useEffect, useState } from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = (props) => {
    const { serviceId } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const matchedService = data.find(service => service.id === parseInt(serviceId));
                setDetails(matchedService)
            })
    }, [serviceId])

    const { name, description, img } = details;

    return (
        <div>
            <Container className="my-5">
                <Row xs={1} md={2} className="my-5 d-flex justify-content-center align-items-center">
                    <Col>
                        <h2 style={{ fontWeight: "500", marginBottom: "20px" }}>{name}</h2>
                        <p>{description}</p>
                        <NavLink to="/addToCart"><button className="btn btn-info">Hire</button></NavLink>

                    </Col>
                    <Col className="">
                        <div>
                            <img width="100%" className=" details-img img-fluid" src={img} alt="" />
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Booking;
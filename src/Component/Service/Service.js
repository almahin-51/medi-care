import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import Zoom from 'react-reveal/Zoom';

const Service = ({ service }) => {

    const { id, img, title, name, description } = service;

    return (
        <Zoom bottom>
            <Col className="medi-card">
                <Card className="cards">
                    <Card.Img variant="top" src={img} className="w-100" />
                    <Card.Body>
                        <Card.Text><small>{title}</small></Card.Text>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description.slice(0, 70)}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0 mx-auto bg-transparent">
                        <Link to={`/booking/${id}`}><Button className="card-btn rounded-0 fw-bold text-light">More Details</Button></Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Zoom>
    );
};

export default Service;
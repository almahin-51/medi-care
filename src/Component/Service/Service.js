import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, img, title, name, description } = service;

    return (
        <Col>
            <Card className="cards">
                <Card.Img variant="top" src={img} className="w-100" />
                <Card.Body>
                    <Card.Text><small>{title}</small></Card.Text>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 70)}</Card.Text>
                </Card.Body>
                <Card.Footer className="border-0">
                    <Link to={`/booking/${id}`}><Button variant="info" className="card-btn">More Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
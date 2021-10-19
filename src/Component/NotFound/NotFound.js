import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src={notfound} alt="" />
            <Link to="/home"><Button variant="info" className="fw-bold notFound-btn">Back to Home</Button></Link>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; 

export default function Home() {
    return (
        <div className="home-container">
            <Container className="text-center text-white d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="display-3 fw-bold">Welcome to Fitness App</h1>
                <p className="lead">Your journey to a healthier life starts here.</p>
                <Link to="/login">
                    <Button variant="primary" size="lg">Log in to get started</Button>
                </Link>
            </Container>
        </div>
    );
}

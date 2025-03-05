import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRunning, FaDumbbell, FaTrophy, FaHeartbeat } from 'react-icons/fa';
import UserContext from "../context/UserContext";
import '../App.css'; 

export default function AppNavbar() {

    const { user } = useContext(UserContext);

    return (
        <Navbar expand="lg" className="app-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    FitneZuitt <FaDumbbell />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link as={Link} to="/" className="nav-link">
                                <FaTrophy /> Home
                            </Nav.Link>

                            <Nav.Link as={Link} to="/about" className="nav-link">
                            About
                            </Nav.Link>

                            {(user.id !== null)
                            ?
                            <> 
                                <Nav.Link as={Link} to="/workouts" className="nav-link">
                                <FaRunning />Workouts
                            </Nav.Link>
                            <Nav.Link as={Link} to="/nutrition" className="nav-link">
                                <FaHeartbeat /> Nutrition
                            </Nav.Link>
                            <Button as={Link} to="/logout" className="nav-button">
                                Logout
                            </Button>
                            </>
                            :                     
                          
                            <Button as={Link} to="/login" className="nav-button">
                                Login
                            </Button>                        
                            }                           

                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

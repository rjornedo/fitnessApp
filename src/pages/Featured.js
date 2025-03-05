import React, { useState } from 'react';
import { Carousel, Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Featured() {
    const [filter, setFilter] = useState("all");

    const filteredExercises = filter === "all" ? exerciseData : exerciseData.filter(exercise => exercise.category === filter);

    return (
        <Container className="featured-container mt-4" style={{ minHeight: '100vh' }}>
        
           <Carousel fade interval={3000} className="shadow-lg">
               {carouselImages.map((image, index) => (
                   <Carousel.Item key={index}>
                       <img className="d-block w-100 rounded" src={image.src} alt="" />
                       <Carousel.Caption>
                           <h3 className="text-shadow">{image.caption}</h3>
                       </Carousel.Caption>
                   </Carousel.Item>
               ))}
           </Carousel>

            {/* Exercise Filter */}
            <div className="d-flex justify-content-center mt-4">
                <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-50">
                    <option value="all">All Exercises</option>
                    <option value="strength">Strength Training</option>
                    <option value="cardio">Cardio</option>
                    <option value="yoga">Yoga & Flexibility</option>
                </Form.Select>
            </div>

            {/* Interactive Exercise Cards */}
            <h2 className="text-center mt-4" style={{ color: 'white', fontSize: '3rem' }}>
              Types of Exercises
            </h2>
            
            <Row className="mt-3 justify-content-center">
                {filteredExercises.length > 0 ? (
                    filteredExercises.map((exercise, index) => (
                        <Col xs={12} sm={6} md={6} lg={4} xl={8} key={index} className="mb-4">
                            <Card className="exercise-card h-100 shadow-sm" style={{ width: '100%' }}>
                                <Card.Img variant="top" src={exercise.image} className="exercise-img" />
                                <Card.Body>
                                    <Card.Title>{exercise.title}</Card.Title>
                                    <Card.Text>{exercise.description}</Card.Text>
                                    <Button variant="primary" style={{ backgroundColor: '#c77f53', borderColor: '#c77f53', color: 'white' }}>
                                      Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col className="text-center">
                        <p>No exercises available for this filter.</p>
                    </Col>
                )}
            </Row>
        </Container>

    );
}

/* Workout Carousel Images */
const carouselImages = [
    { src: "https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/05/Woman-strength-training-at-home.jpg", caption: "Push Your Limits" },
    { src: "https://www.shutterstock.com/image-photo/group-young-athlete-male-female-600nw-2187804365.jpg", caption: "Stronger Every Day" },
    { src: "https://cdn.shopify.com/s/files/1/1214/8590/files/sporty-beautiful-young-woman-practicing-yoga.jpg?v=1493903855", caption: "Stay Active, Stay Fit" }
];

/* Exercise Data */
const exerciseData = [
    { title: 'Strength Training', description: 'Build muscle and improve endurance.', image: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/05/Woman-strength-training-at-home.jpg', category: "strength" },
    { title: 'Cardio Workouts', description: 'Boost heart health with running & cycling.', image: 'https://www.shutterstock.com/image-photo/group-young-athlete-male-female-600nw-2187804365.jpg', category: "cardio" },
    { title: 'Yoga & Flexibility', description: 'Improve flexibility & mental health.', image: 'https://cdn.shopify.com/s/files/1/1214/8590/files/sporty-beautiful-young-woman-practicing-yoga.jpg?v=1493903855', category: "yoga" }
];

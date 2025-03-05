import React from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const DeleteWorkout = ({ workoutId }) => {
    const handleDelete = async () => {
        const response = await fetch(`${API_BASE_URL}/workouts/deleteWorkout/${workoutId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        const data = await response.json();
        alert(data.message || 'Workout deleted');
    };

    return <button onClick={handleDelete}>Delete Workout</button>;
};

export default DeleteWorkout;

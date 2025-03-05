import React from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CompleteWorkout = ({ workoutId }) => {
    const handleComplete = async () => {
        const response = await fetch(`${API_BASE_URL}/workouts/completeWorkoutStatus/${workoutId}`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        const data = await response.json();
        alert(data.message || 'Workout marked as completed');
    };

    return <button onClick={handleComplete}>Mark as Completed</button>;
};

export default CompleteWorkout;

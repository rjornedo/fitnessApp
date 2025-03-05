import React, { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const AddWorkout = () => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_BASE_URL}/workouts/addWorkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            body: JSON.stringify({ name, duration })
        });

        const data = await response.json();
        alert(data.message || 'Workout added!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Workout Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="number" placeholder="Duration (mins)" value={duration} onChange={e => setDuration(e.target.value)} required />
            <button type="submit">Add Workout</button>
        </form>
    );
};

export default AddWorkout;

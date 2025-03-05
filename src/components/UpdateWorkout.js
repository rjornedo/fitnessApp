import React, { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const UpdateWorkout = ({ workoutId }) => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_BASE_URL}/updateWorkout/${workoutId}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({ name, duration })
        });

        const data = await response.json();
        alert(data.message || 'Workout updated!');
    };

    return (
        <form onSubmit={handleUpdate}>
            <input 
                type="text" 
                placeholder="New Name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="New Duration (mins)" 
                value={duration} 
                onChange={e => setDuration(e.target.value)} 
            />
            <button type="submit">Update Workout</button>
        </form>
    );
};

export default UpdateWorkout;

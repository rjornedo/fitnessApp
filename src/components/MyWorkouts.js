import React, { useState, useEffect } from 'react';
import UpdateWorkout from './UpdateWorkout';
import DeleteWorkout from './DeleteWorkout';
import CompleteWorkout from './CompleteWorkout';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const MyWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const accessToken = localStorage.getItem("token");
                console.log("Token being sent:", accessToken); // Debugging

                if (!accessToken) {
                    throw new Error("Access token is missing. Please log in again.");
                }

                const response = await fetch(`${API_BASE_URL}/workouts/getMyWorkOuts`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
                }

                const data = await response.json();
                console.log("Workouts fetched:", data);
                setWorkouts(data); // Update state with fetched workouts
            } catch (error) {
                console.error("Error fetching workouts:", error);
                setError(error.message); 
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <div className="my-workouts-container">
            <h2>My Workouts</h2>

            {/* Show error message if there's an issue */}
            {error && <p className="error-message">{error}</p>}

            <ul className="workout-list">
                {workouts.length > 0 ? (
                    workouts.map(workout => (
                        <li key={workout._id} className="workout-card">
                            <strong>{workout.name}</strong> - {workout.duration} mins - {workout.status}
                            <div className="workout-actions">
                                <UpdateWorkout workoutId={workout._id} />
                                <CompleteWorkout workoutId={workout._id} />
                                <DeleteWorkout workoutId={workout._id} />
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="no-workouts">No workouts found.</p>
                )}
            </ul>
        </div>
    );
};

export default MyWorkouts;

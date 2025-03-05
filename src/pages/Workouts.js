import React from 'react';
import AddWorkout from '../components/AddWorkout';
import MyWorkouts from '../components/MyWorkouts';
import '../App.css'; // Import the CSS file

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Workout Dashboard</h1>
            <div className="dashboard-card-container">
                <div className="dashboard-card">
                    <h2>Add a New Workout</h2>
                    <AddWorkout />
                </div>
                <div className="dashboard-card">
                    <MyWorkouts />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import './App.css';  

function App() {
    return (
        <Router>
          <AppNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;

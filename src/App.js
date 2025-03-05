import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from "./pages/Logout";
import Register from './pages/Register';
import Workouts from './pages/Workouts';
import { UserProvider } from "./context/UserContext";
import './App.css';  



function App() {

    // State hook for the user to allow it to have a global scope
    const [ user, setUser] = useState({
      id: null,
      isAdmin: null
    });

    // function for clearing the local storage
    function unsetUser(){
      localStorage.clear();
    }

    useEffect(() => {
      console.log(user);
      console.log(localStorage);

      fetch(`${process.env.REACT_APP_API_BASE_URL}/users/details`, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
              }

          })
          .then(res => res.json())
          .then(data => {
              console.log(data)

              if(data && data._id){
                setUser({
                  id: data._id,
                  isAdmin: data.isAdmin
              })
              } else {
                setUser({
                   id: null,
                  isAdmin: null
                })
              }            
          })
    }, [])

    return (
        <>
        <UserProvider value={{user, setUser, unsetUser}}>
            <Router>
              <AppNavbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/workouts" element={<Workouts />} /> 
                    </Routes>
                </Container>
            </Router>
          </UserProvider>

        </>
    );
}

export default App;

import { useState, useEffect, useContext } from 'react';
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Form, Button } from 'react-bootstrap';
import { Notyf } from "notyf";


export default function Login() {

    const { user, setUser} = useContext(UserContext);
    console.log(user);

    const notyf = new Notyf();

    // State hooks to store the values of the input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);


    function authenticate(e) {

        // Prevents page redirection via form submission
        e.preventDefault();
        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email: email,
                password: password

            })
        })
        .then(res => res.json())
        .then(data => {

            // Response from the api
            console.log(data);

            if(data.access) {

            	localStorage.setItem("token", data.access);
                // Retrieve user details upon login
                retrieveUserDetails(data.access)

            	               
                // Clear input fields after submission
                setEmail('');
                setPassword('');

                notyf.success(`Successful login!`);
            
            } else if (data.message === "Incorrect email or password") {

                notyf.error(`Incorrect credentials: Please try again.`);

            } else {

                notyf.error(`User Not Found: Try Again.`);
            }

        })

    }

    function retrieveUserDetails(token){

        fetch('http://localhost:4000/users/details', {
            headers: {
                Authorization: `Bearer ${token}`
            }

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            })
        })

    }

    useEffect(() => {

        // Validation to enable submit button when all fields are populated and both passwords match
        if(email !== '' && password !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

    }, [email, password]);

    return (

            (user.id !== null)
            ?
            <Navigate to="/workouts"/>
            :            
            <Form onSubmit={(e) => authenticate(e)}>
                <h1 className="my-5 text-center">Login</h1>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                { isActive 
                    ? 
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    : 
                        <Button variant="danger" type="submit" disabled>
                            Login
                        </Button>
                }
            </Form>       
    )
}
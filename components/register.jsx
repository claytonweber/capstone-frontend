import React, { useState } from 'react';
import { registerUser } from './api-adapters';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const setLoggedIn = props.setLoggedIn;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDeafult();

        try {
            const result = await registerUser(username, password, email);
            console.log(result);
            localStorage.setItem('token', result.token);
            setLoggedIn(true);
            navigate('/');

        } catch(error) {
            console.log(error);
        }
    }
    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Username
                    <input
                        type="text"
                        value={username}
                        oncChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                </label>
                <label>
                Password
                    <input
                        type="text"
                        value={password}
                        oncChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </label>
                <label>
                Email
                    <input
                        type="text"
                        value={email}
                        oncChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
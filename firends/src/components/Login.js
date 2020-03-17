import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledForm, Error } from './styled-components';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState(null);
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value.trim()
        })
    }
    const handleLogin = e => {
        e.preventDefault();

        if (credentials.username === "" && credentials.password === "") {
            setErrors({
                message: "Bad credentials. Username and password are required."
            })
            return;
        }
        
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            window.location = "/friends";
        })
        .catch(err => setErrors({
            message: err.response.data.error || err.message
        }));
    }
    return(
        <StyledForm onSubmit={handleLogin}>
            <h1>Sign in</h1>
            {errors && <Error>{errors.message}</Error>}
            <input type="text" name="username" onChange={handleChange} value={credentials.username} placeholder="Username" />
            <input type="password" name="password" onChange={handleChange} value={credentials.password} placeholder="Password" />
            <button type="submit">Sign in</button>
        </StyledForm>
    )
}

export default Login;
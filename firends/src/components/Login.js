import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const Error = styled.div`
    background-color: #bf360c;
    color: #fff;
    padding: 15px;
    margin-bottom: 20px;
`

const StyledForm = styled.form`
    max-width: 450px;
    margin: 65px auto;
    display:  flex;
    flex-direction: column;
    padding: 45px 15px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
    h1 {
        width: 100%;
        padding: 20px 0;
        text-align: center;
    }
    input {
        width: 100%;
        padding: 1rem;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 25px;
        font-size: 15px;
        transition: .3s;
        &:focus {
            box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
            border-color: transparent;
        }
    }
    button {
        width: 100%;
        padding: 15px;
        font-size: 0.9rem;
        text-transform: uppercase;
        background-color: #512da8;
        color: #fff;
        border-radius: 25px;
        margin: 15px 0;
        transition: .3s;
        &:hover {
            background-color: #311b92
        }
    }
`

export default Login;
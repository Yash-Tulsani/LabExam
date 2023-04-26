// Create a react component for a login/register page for doctor, patient and nurse

// Path: frontend\frontend\src\Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    
        const navigate = useNavigate();
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        function openRegister() {
            navigate("/register");
        }
    
        function login() {
            const user = {
                email: email,
                password: password
            }
            axios.post('http://localhost:5000/login', user)
                .then(res => {
                    console.log(res.data);
                    if (res.data === "doctor") {
                        navigate("/doctor");
                    }
                    else if (res.data === "patient") {
                        navigate("/patient");
                    }
                    else if (res.data === "nurse") {
                        navigate("/nurse");
                    }
                    else {
                        alert("Invalid Credentials");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    
        return (
            <div className="login">
                <div className="loginBox">
                    <div className="loginHeading">Login</div>
                    <div className="loginInput">
                        <div className="loginLabel">Email</div>
                        <input type="text" className="loginInputBox" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="loginInput">
                        <div className="loginLabel">Password</div>
                        <input type="password" className="loginInputBox" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="loginButton" onClick={login}>Login</div>
                    <div className="loginRegister" onClick={openRegister}>Register</div>
                </div>
            </div>
        )
    }

export default Login
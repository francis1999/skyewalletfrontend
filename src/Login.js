import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from "../src/includes/Controller";

function Login() {
    /* const initialValues = {
        email: "",
        password: ""
    } */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    /* const [userLogin, setUserLogin] = useState(initialValues); */
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const data = { email: email, password: password };
        axios.post('registration/userlogin', data).then(response => {
            if (response.data.message == "You have successfully Logged in") {
                console.log(response.data);
                alert("You have Successfully Logged in");
                setUserSession(response.data.data.accessToken, response.data);
                navigate('/dashboard/Index');
            }

        })
            .catch(error => {
                if (error.response.status === 401 || error.response.status === 400) {
                    alert("Wrong Username and Password");
                } else {
                    alert("some of the input Field is Empty");
                    navigate("Login")
                }
            })
    }


    return (
        <div>
            <div className="login-div">
                <p>User Login</p>
                <hr />
                <form onSubmit={handleLogin}>
                    <label>Email</label><br />
                    <input type="text" placeholder="...Email" name="name" onChange={(e) => setEmail(e.target.value)} /><br />
                    <label>Password</label><br />
                    <input type="password" placeholder="...Password" name="password" onChange={(e) => setPassword(e.target.value)} />

                    <button className="btn btn-primary btn-sm" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login

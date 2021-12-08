import React from 'react'
import { Button } from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SweetAlert = require('react-bootstrap-sweetalert');


function Home() {
    const adduser = {
        email: "",
        name: "",
        number: "",
        password: "",
    };
    const [userReg, setUserReg] = useState(adduser);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setUserReg({ ...userReg, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const getToken = localStorage.getItem("token");
        axios.post(`registration/userregistration`, userReg).then((response) => {
            setUserReg(response.data)
            if (response.message = "Success") {

                alert("Registration Successful");
                navigate("/Login");

            } else {
                alert("Oop!!! SOmething went Wrong");
            }

        })
    }

    {/* <SweetAlert
        title={"Uses render props"}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        dependencies={[this.state.firstName, this.state.lastName]}
    ></SweetAlert> */}
    return (
        <div>


            <div className="login-div">
                <p>User Registration</p>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label><br />
                    <input type="text" name="name" placeholder="...Full Name" onChange={handleInputChange} /> <br />

                    <label>Phone Number</label><br />
                    <input type="text" name="number" placeholder="...Phone Number" onChange={handleInputChange} /><br />

                    <label>Email</label><br />
                    <input type="text" name="email" placeholder="...Email" onChange={handleInputChange} /><br />

                    <label>Password</label><br />
                    <input type="password" name="password" placeholder="...Password" onChange={handleInputChange} />

                    <button className="btn btn-primary btn-sm" onClick={handleSubmit}>Sign-Up</button>
                </form>
            </div>

        </div>
    )
}

export default Home

import React from 'react'
import { Button } from 'react-bootstrap/Button';
import { useState } from 'react';


function Home() {
    const adduser = {
        email: "",
        name: "",
        number: "",
        password: "",
    };
    const [userReg, setUserReg] = useState(adduser);

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setUserReg({ ...userReg, [name]: value })
    }
    return (
        <div>


            <div className="login-div">
                <p>User Registration</p>
                <hr />
                <label>Full Name</label><br />
                <input type="text" name="name" placeholder="...Full Name" onChange={handleInputChange} /> <br />

                <label>Phone Number</label><br />
                <input type="text" name="number" placeholder="...Phone Number" onChange={handleInputChange} /><br />

                <label>Email</label><br />
                <input type="text" name="email" placeholder="...Email" onChange={handleInputChange} /><br />

                <label>Password</label><br />
                <input type="password" name="password" placeholder="...Password" onChange={handleInputChange} />

                <button className="btn btn-primary btn-sm">Sign-Up</button>
            </div>

        </div>
    )
}

export default Home

import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function Login() {
    return (
        <div>
            <div className="login-div">
                <p>User Login</p>
                <hr />
                <label>Email</label><br />
                <input type="text" placeholder="...Email" /><br />
                <label>Password</label><br />
                <input type="password" placeholder="...Password" />

                <button className="btn btn-primary btn-sm">Login</button>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div className="navigation">
                <div>
                    <div className="login-button"><Link to="/Login">Login</Link></div>
                    <div className="login-button"><Link to="/">Signup</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Nav

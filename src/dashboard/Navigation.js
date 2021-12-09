import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import BasicTable from './Components/BasicTable';
import { getUser } from '../includes/Controller';
import axios from 'axios';





function Navigation() {
    const [user_id, setUser_id] = useState("");

    const user = getUser();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let { name, value } = e.target
        //var data = value;
        setUser_id(value)

        const data = (user.data._id);
        alert(data);
        const getToken = sessionStorage.getItem("token");
        const senders = await axios.post('paymentgenerate/paymentgenerates', data, {

            headers: {
                "Content-Type": "application/json",
                /* 'Authorization': `Bearer ${getToken}`, */
            },

        }).then((response) => {
            setUser_id(response.data)
            if (response.message = "Payment ID generated Successfully") {
                alert("Payment ID generated Successfully");
                console.log(response);
            } else if (response = ["You have Exceeded The Number of PaymentID You can Generate"]) {
                alert("You have Exceeded The Number of PaymentID You can Generate.");
            }

            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }




    return (
        <div className="left-navigation">
            <div className="left">
                <div>
                    <span className="dashbaord"><center>Dashboard</center></span>
                </div>
            </div>
            <div className="right"><div className="innerleft">


                <div className="click-search">
                    <div>
                        <form onSubmit={handleSubmit}><input type="text" name="user_id" onChange={(e) => setUser_id(e.target.value)} />
                            <button className="btn btn-primary btn-sm" onClick={handleSubmit}><Link to="#">Generate Payment ID</Link></button>
                        </form>


                    </div>
                    <div>  <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder="Search . . . " aria-label="Search" />
                    </div></div>
                </div>
                <table>
                    <tr>
                        <th>S/N</th>
                        <th>PAYMENT ID</th>
                        <th>USER'S NAME</th>
                        <th>ACTION</th>
                    </tr>
                </table>

            </div></div>
        </div>
    )
}

export default Navigation

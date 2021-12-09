import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function index() {

    const AddCustodiansTable = [
        /*  {
             Header: 'S/N',
             accessor: 'id'
         }, */

        {
            Header: 'FIRST NAME',
            accessor: 'firstname'
        },

        {
            Header: 'LAST NAME',
            accessor: 'lastname'
        },

        {
            Header: 'EMAIL',
            accessor: 'email'
        },
        {
            Header: 'PHONE',
            accessor: 'phone'
        },
        {
            Header: 'COMPANY NAME',
            accessor: 'company_name'
        },
        /*    {
               Header: 'REGION',
               accessor: 'region'
           },
           {
               Header: 'STATE',
               accessor: 'state'
           }, */
        {
            Header: 'BRANCH',
            accessor: 'branch'
        },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: (e) => {
                return (
                    <>

                        <span><span className="viewbutton" >a</span> <span className="viewbutton"><Link to={`SingleVendor / ${e.value}`}>view</Link></span> <span className="deletebutton">Delete</span></span>
                    </>
                )
            }
        }

    ]
    return (
        <div>
            <Navigation />
            {/*  <p>This is my dashboard</p> */}
        </div>
    )
}

export default index

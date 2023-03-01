import React from 'react'
import Footer from './footer.component'
import { BiUserCircle } from "react-icons/bi";
import {Outlet, Link} from "react-router-dom"

function Signup(){

    return (

        <>
        
        <div className="px-4 pt-5 my-5 text-center">

        <form className="mx-auto" style={{ "maxWidth": "330px" }}>
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

            <div className="form-floating mb-2">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-2">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-2">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    
                </label>
            </div>

            <Link to="/Notes">
            <button className="w-100 btn btn-lg" type="submit" style={{ "backgroundColor" : "#38568C","color" : "#F7DD88" }}>
                <b>Sign up <BiUserCircle /></b>
            </button>
            </Link>

        </form>

        <Footer />

        </div>

        <Outlet />

        
        </>

    )

}

export default Signup
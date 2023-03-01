import React from 'react'
import {Outlet, Link} from "react-router-dom"
import image from '../assets/hero.jpg'
import { BiUserCircle } from "react-icons/bi";
import { BiLogInCircle } from "react-icons/bi";
import Footer from './footer.component'

function Home(){

    const hero : any = {

        heading : "Store Your Thoughts In The Cloud",
        lead : "CloudNotes helps you jot your thoughts easily, securely and also makes it accessible across any device you choose to view it from.",
        image : image

    }

    return (

        <>
        
        <div className="px-4 pt-5 my-5 text-center">

            <h1 className="display-4 fw-bold">{hero.heading}</h1>

            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{hero.lead}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link to="/Login" className="text-decoration-none text-light">
                    <button type="button" 
                        className="btn btn-lg px-4 text-light" 
                        style={{ "backgroundColor" : "#38568C" }}
                    >
                        <b>Login <BiLogInCircle /></b>
                    </button> 
                    </Link>
                    <Link to="/Signup" className="text-decoration-none text-light">
                    <button type="button" 
                        className="btn btn-lg px-4 text-light" 
                        style={{ "backgroundColor" : "#F7DD88" }}
                    >
                        <b>Sign Up <BiUserCircle /></b>
                    </button>
                    </Link>
                    
                </div>
            </div>
            <div >
                <div className="container px-5">
                    <img src={hero.image}
                        className="img-fluid rounded-3 shadow-lg mb-4" 
                        alt="Example" width="700" height="500" loading="lazy"
                    />
                </div>
            </div>

            <Footer/>

        </div>

        <Outlet />
        
        </>

    )

}

export default Home
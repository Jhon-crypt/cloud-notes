import React from "react";
import {Outlet, Link} from "react-router-dom"
import { BsFillCloudHaze2Fill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BiLogInCircle } from "react-icons/bi";


function Header(){

    const nav_head : any = {

        title1 : 'Cloud',
        title2 : 'Notes'
        
    }

    const nav_item = [

        {item : "Login", icon : <BiLogInCircle />},
        {item : "Signup", icon : <BiUserCircle/>}

    ]

    return (

        <>
        
        <nav className="navbar bg-light text-dark" aria-label="First navbar example">

            <div className="container">

                <a className="navbar-brand" href="/">
                    <b>
                       <BsFillCloudHaze2Fill style={{ "color" : "#38568C" }}/> 
                       <span style={{ "color" : "#38568C" }}>{nav_head.title1}</span> 
                       <span style={{ "color" : "#F7DD88" }}>{nav_head.title2}</span>
                    </b>
                </a>

                <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarsExample01" 
                    aria-controls="navbarsExample01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation
                ">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample01">

                    <ul className="navbar-nav me-auto mb-2">
                        {nav_item.map((item,index) => (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link text-dark" to={`/${item.item}`}>
                                {item.icon} {item.item}
                            </Link>
                        </li>
                        ))}
                    </ul>
        
                </div>

            </div>

        </nav>

        <Outlet />

        </>

    )

}

export default Header
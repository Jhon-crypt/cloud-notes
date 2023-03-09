import React from 'react'
import { BiLogInCircle } from "react-icons/bi";

function LogOut(){

    return (

        <>
        
        <div className="container px-4 pt-3 my-5 text-center">

            <h2>You Need To Log In <BiLogInCircle/></h2>

            <button className="btn btn-lg" style={{ "backgroundColor": "#F7DD88", "color": "#38568C" }}>
                <b>Login Now<BiLogInCircle /></b>
            </button>

        </div>
        
        </>

    )

}

export default LogOut
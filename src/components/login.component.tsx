import React from 'react'
import Footer from './footer.component'
import { BiLogInCircle } from "react-icons/bi";

function Login(){

    return (

        <>
        
        <div className="px-4 pt-5 my-5 text-center">

        <form className="mx-auto" style={{ "maxWidth": "330px" }}>
            <h1 className="h3 mb-3 fw-normal">Login</h1>


            <div className="form-floating mb-2">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-2">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    
                </label>
            </div>
            <button className="w-100 btn btn-lg" type="submit" style={{ "backgroundColor" : "#F7DD88","color" : "#38568C" }}>
                <b>Login <BiLogInCircle /></b>
            </button>

        </form>

        <Footer />

        </div>   

        </>

    )

}


export default Login


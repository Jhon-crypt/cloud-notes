import React from 'react'
import Footer from './footer.component'
import { BiLogInCircle } from "react-icons/bi";
import {Outlet, Link} from "react-router-dom"

function AccountCreated() {

    return (

        <>

            <div className="container px-4 pt-3 my-5 text-center">

                <h2>Account Created</h2>

                <div className="mt-4">

                    <div className="card mx-auto" style={{ width: '300px' }}>

                        <div className="card-body">

                            <h3>Verify Email</h3>
                            <p>An email with a verification link has been sent to you</p>

                            <Link to="/Login">
                                <button className="w-100 btn btn-lg" type="submit" style={{ "backgroundColor": "#F7DD88", "color": "#38568C" }}>
                                    <b>I have Clicked The Link <BiLogInCircle /></b>
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>

                <Footer />

            </div>

            <Outlet />

        </>

    )

}

export default AccountCreated
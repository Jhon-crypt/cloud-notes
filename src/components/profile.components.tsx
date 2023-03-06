import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import LogoutModal from './logoutModal';

function Profile() {

    return (

        <>

            <div className="container px-4 pt-3 my-5 text-center">

                <h2>Profile <BiUserCircle /></h2>

                <div className="mt-4">

                    <div className="card mx-auto" style={{ width : '300px' }}>

                        <div className="card-body">

                            <BiUserPin style={{ "fontSize": "100px" }} />
                            <h3>Oladele John</h3>
                            <p>johnoladele690@gmail.com</p>

                            <button className="btn btn-danger" data-bs-toggle="modal" 
                            data-bs-target="#logoutModal">

                                Logout <BiLogOutCircle />
                            
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <LogoutModal />

        </>

    )

}

export default Profile
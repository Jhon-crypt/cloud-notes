import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

function LogoutModal() {

    return (

        <>

            <div className="modal" id="logoutModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"><BiLogOutCircle /> Logout</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">

                            <h4 className="text-center">
                                Are sure you want <br/> to logout
                            </h4>

                            <ul className="nav justify-content-center">

                                <li className="nav-item me-3">

                                    <button className="nav-link text-dark btn btn-light btn-lg w-100" 
                                    data-bs-dismiss="modal">

                                        No

                                    </button>

                                </li>

                                <li className="nav-item">

                                    <button className="nav-link text-light btn btn-danger btn-lg w-100">

                                        Yes

                                    </button>

                                </li>

                            </ul>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}

export default LogoutModal
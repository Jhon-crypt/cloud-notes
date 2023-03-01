import React from "react";
import CreateNoteButton from "./createNoteButton.component";
import { CgCalendarDates } from "react-icons/cg";
import { CgTime } from "react-icons/cg";


function Notes(){

    return (

        <>
        
            <CreateNoteButton />

            <div className="container pt-4 mx-auto" style={{  "width" : "330px" }}>

                <div className="card" >

                    <div className="card-body ps-4">

                        <h4>My name is John My name is John My name is John</h4>

                        <ul className="nav justify-content-center">

                            <li className="nav-item">

                                <a className="nav-link text-decoration-none text-muted" href="/">

                                    <CgCalendarDates /> 2/2202

                                </a>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link text-decoration-none text-muted" href="/">

                                    <CgTime /> 12:47

                                </a>

                            </li>

                             <li className="nav-item">

                                <a className="nav-link text-decoration-none text-muted" href="/">

                                    <button className="btn btn-danger">

                                        Delete Note

                                    </button>

                                </a>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        
        </>

    )

}

export default Notes
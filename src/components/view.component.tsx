import React from 'react'
//import { MdNotes } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { CgTime } from "react-icons/cg";
import { CgTrash } from "react-icons/cg";
import { useParams } from 'react-router-dom'

function ViewNotesComp() {

    const { heading, content } = useParams()

    return (

        <>

            <div className="container px-4 pt-3 my-5 text-center " >

                <h2 className="mx-auto" style={{ "maxWidth": "330px" }}>{heading}</h2>

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

                        <a className="nav-link text-decoration-none text-danger" href="/">

                            <CgTrash /> Delete

                        </a>

                    </li>

                </ul>


                <div className="container mt-4 pt-4 mb-3" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className="card">

                        <div className="card-body">

                            <p>{content}</p>

                        </div>

                    </div>

                </div>


            </div>

        </>

    )

}

export default ViewNotesComp
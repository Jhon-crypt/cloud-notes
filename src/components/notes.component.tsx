import React from "react";
import CreateNoteButton from "./createNoteButton.component";
import { CgCalendarDates } from "react-icons/cg";
import { CgTime } from "react-icons/cg";
import { CgTrash } from "react-icons/cg";
import CreateNoteModal from "./createNoteModal.component";


function Notes() {

    const note_item = [

        {title : "Just testing if notes are working"},
        {title : "Testing something hgvugfv huihu"},
        {title : "Yet another fucking testbhgyyg"},
        {title : "Testing something hgvugfv huihu"},
        {title : "Yet another fucking testbhgyyg"},
        {title : "Testing something hgvugfv huihu"},
        {title : "Yet another fucking teshgyyg"},
        {title : "Testing something hgvugfv huihu"},
        {title : "Yet another fucking testbhgyyg"}
        //John what the hell is this

    ]

    return (

        <>

            <CreateNoteButton />

            <div className="container pt-4 mb-3" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div className="row">

                {note_item.map((item,index) => (

                    <div className="col mb-2" key={index}>

                        <div className="card" >

                            <div className="card-body">

                                <h4>{item.title}</h4>

                                <ul className="nav">

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

                            </div>

                        </div>

                    </div>


                ))}   

                </div>

            </div>

            <CreateNoteModal />

        </>

    )

}

export default Notes
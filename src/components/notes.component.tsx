import React from "react";
import {Outlet, Link} from "react-router-dom"
import CreateNoteButton from "./createNoteButton.component";
import { CgCalendarDates } from "react-icons/cg";
import { CgTime } from "react-icons/cg";
import { CgTrash } from "react-icons/cg";
import CreateNoteModal from "./createNoteModal.component";


function Notes() {

    const note_item = [

        {id : 1,title : "Just testing if notes are working",note : "jjbjbcnihsu88ui8qah"},
        {id : "jbjcjdj",title : "Testing something hgvugfv huihu",note : "jjbjbcnihsu88uih"},
        {id : "jbjbjb",title : "Yet another fucking testbhgyyg",note : "jjbjbcnihsu88uigchgchc"},
        {id : "kjjbjcjd",title : "Testing something hgvugfv huihu",note : "jjbjbcnihsu88ui8qah"},
        {id : "jbjbjbjbj",title : "Yet another fucking testbhgyyg",note : "jjbjbcnihsu88ui8qah"},
        {id : "jjcbjbdjbjbd",title : "Testing something hgvugfv huihu",note : "jjbjbcnihsu88ui8qah"},
        {id : "jjhihieohohc",title : "Yet another fucking teshgyyg",note : "jjbjbcnihsu88ui8qah"},
        {id : "biiuiuiui",title : "Testing something hgvugfv huihu",note : "jjbjbcnihsu88ui8qah"},
        {id : "jbbkbiuiucu",title : "Yet another fucking testbhgyyg",note : "jjbjbcnihsu88ui8qah"}

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

                    <>
                    <div className="col mb-2" key={index}>

                        <Link className="text-decoration-none" to={`/View/${item.title}/${item.note}`}>
                        <div className="card">

                            <div className="card-body">

                                <h4 className="text-dark">{item.title}</h4>

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
                        </Link>
                       
                    </div>
                    
                    <CreateNoteModal />

                    </>

                ))}   

                </div>

            </div>

            <Outlet />

        </>

    )

}

export default Notes
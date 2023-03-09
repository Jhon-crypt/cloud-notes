import React from "react";
import { Outlet, Link } from "react-router-dom"
import CreateNoteButton from "./createNoteButton.component";
import { CgTrash } from "react-icons/cg";
import CreateNoteModal from "./createNoteModal.component";
import supabase from "../supabase";
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'


function Notes() {


    const [loading, setLoading] = useState(false);

    const [userNotes, setUserNotes] : any = useState([]);

    useEffect(() => {

        setLoading(true)

        const fetchUserNotes = async () => {

            try {

                const { data }: any = await supabase.auth.getUser()

                if (data) {

                    try {

                        let { data: notes, error } : any = await supabase
                            .from('notes')
                            .select("*")
                            .eq('user_id', `${data.user.id}`)

                        setLoading(false)

                        if (notes) {

                            setUserNotes(notes)

                        } else {

                            console.log(error)

                        }


                    } catch (error) {

                        console.log(error)

                    }

                }


            } catch (error) {

                console.log(error)

            }

        }

        fetchUserNotes()

    }, [])



    return (

        <>

            {loading ?

                (

                    <div className="mx-auto mt-4" style={{ "width": "80px" }}>
                        <Oval
                            height={80}
                            width={80}
                            color="#38568C"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#F7DD88"
                            strokeWidth={2}
                            strokeWidthSecondary={2}

                        />
                    </div>

                ) : (

                    <>

                        <CreateNoteButton />

                        <div className="container pt-4 mb-3" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>

                            <div className="row">

                                {userNotes.map((item: { id: any; note: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date_created: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; time_created: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (

                                    <>
                                        <div className="col mb-2" key={item.id}>

                                            <Link className="text-decoration-none" to="/">
                                                <div className="card">

                                                    <div className="card-body">

                                                        <h4 className="text-dark">{item.title}</h4>

                                                        <ul className="nav">

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

                        <CreateNoteModal />

                    </>

                )

            }



        </>



    )

}

export default Notes
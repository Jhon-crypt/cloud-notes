import React from "react";
import { Outlet, Link } from "react-router-dom"
import CreateNoteButton from "./createNoteButton.component";
import { CgTrash } from "react-icons/cg";
import supabase from "../supabase";
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { BiLinkExternal } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


function Notes() {

    const [loading, setLoading] = useState(false);

    const [userNotes, setUserNotes]: any = useState([]);

    useEffect(() => {


        setLoading(true)

        const fetchUserNotes = async () => {

            try {

                const { data }: any = await supabase.auth.getUser()

                if (data) {

                    try {

                        let { data: notes, error }: any = await supabase
                            .from('notes')
                            .select("*")
                            .eq('user_id', `${data.user.id}`)
                            .order('id', { ascending: false })

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

    let navigate = useNavigate()

    const handleDelete = (noteDeleteId: any) => () => {

        const deleteNotes = async () => {

            //alert(`${noteDeleteId}`)

            try {

                setLoading(true)

                const { error } = await supabase
                .from('notes')
                .delete()
                .eq('id', `${noteDeleteId}`)

                setLoading(false)

                if(error){

                    console.log(error)

                }else{

                    navigate("/Redirect")

                }


            } catch (error) {
    
                console.log(error)

            }

        }

        deleteNotes()

    };



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


                                            <div className="card">

                                                <div className="card-header">

                                                    <h4 className="text-dark card-title">{item.title}</h4>

                                                </div>


                                                <div className="card-body">


                                                    <Link className="text-decoration-none card-link" to={`/View/${item.id}`}>
                                                        <button className=" btn btn-sm" style={{
                                                            "backgroundColor": "#F7DD88",
                                                            "color": "#38568C"
                                                        }}>
                                                            <BiLinkExternal />
                                                        </button>
                                                    </Link>

                                                    <button className="card-link btn btn-danger btn-sm"
                                                        onClick={handleDelete(`${item.id}`)}
                                                    >
                                                        <CgTrash />
                                                    </button>


                                                </div>

                                            </div>


                                        </div>

                                    </>

                                ))}

                            </div>

                        </div>

                        <Outlet />

                    </>

                )

            }



        </>



    )

}

export default Notes
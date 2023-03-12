import React from 'react'
//import { MdNotes } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { useParams } from 'react-router-dom'
import supabase from "../supabase";
import { useState, useEffect } from 'react'
import { Oval } from 'react-loader-spinner'

function ViewNotesComp() {

    const { id } = useParams()

    const [loading, setLoading] = useState(false)

    const [noteTitle, setNoteTitle] = useState("")

    const [note, setNote] = useState("")

    useEffect(() => {


        const fullNotes = async () => {

            try {

                setLoading(true)

                let { data: notes, error }: any = await supabase
                    .from('notes')
                    .select("*")
                    .eq('id', `${id}`)
                    .single()

                setLoading(false)

                if (notes) {

                    console.log(notes)

                    setNoteTitle(notes.title)

                    setNote(notes.note)

                } else {

                    console.log(error)

                }


            } catch (error) {

                console.log(error)

            }

        }

        fullNotes()

    }, [id])


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

                        <div className="container px-4 pt-3 my-5 text-center " >



                            <>

                                <div className="container mt-4 pt-4 mb-3" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>

                                    <div className="card">

                                        <div className="card-header">

                                            <h2 className="text-center">{noteTitle}</h2>

                                        </div>

                                        <div className="card-body">

                                            <p className="card-text text-start">{note}</p>

                                        </div>

                                        <div className="card-footer">
                                            <button className="card-link btn btn-danger btn-sm" ><CgTrash /></button>
                                        </div>

                                    </div>

                                </div>

                            </>


                        </div>

                    </>

                )

            }


        </>

    )

}

export default ViewNotesComp
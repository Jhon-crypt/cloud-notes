import React from 'react'
import Footer from './footer.component'
import { FiPlusCircle } from "react-icons/fi";
import { useState } from 'react'
import supabase from '../supabase';
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';


function CreateNote() {

    const [title, setTitle] = useState('')

    const [note, setNote] = useState('')

    const [loading, setLoading] = useState(false)

    const [errorStatus, setErrorStatus] = useState(false)

    const [noteStatus, setNoteStatus] = useState(false)

    //const [redirect, setRedirect] = useState(false)

    let navigate = useNavigate()


    const handleCreateNote = async (event: any) => {

        event.preventDefault()

        // fetching user id 
        try {

            setLoading(true)

            const { data }: any = await supabase.auth.getUser()

            if (data) {

                console.log(data)

                //alert(`${data.user.id}`)

                try {

                    const { error } = await
                        supabase.from('notes').insert({
                            title: `${title}`,
                            note: `${note}`,
                            user_id: `${data.user.id}`
                        })

                    setLoading(false)

                    if (error) {

                        console.log(error)

                        setErrorStatus(true)

                        setNoteStatus(false)

                    } else {

                        navigate("/Notes")

                        setErrorStatus(false)

                        setNoteStatus(true)




                    }


                } catch (error) {

                    console.log(error)

                }

            } else {

                console.log("could not fetch user data")

            }

        } catch (error) {



        }

    }

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

                    <form onSubmit={handleCreateNote} className="mx-auto  pt-4 mb-3" style={{ "maxWidth": "330px" }} >
                        <h1 className="h3 mb-3 fw-normal text-center">Create Note <FiPlusCircle /></h1>

                        {errorStatus ?

                            (



                                <div className="alert alert-warning alert-dismissible w-100">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    Could Not Creacte Note
                                </div>



                            ) : (
                                <>

                                    {noteStatus ?

                                        (
                                            <>
                                                <div className="alert alert-success alert-dismissible w-100">
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                                    Note Created
                                                </div>

                                            </>

                                        ) : (

                                            <></>

                                        )

                                    }
                                </>
                                //nawa for typescript oo, any small error like this, editor go turn red


                            )

                        }

                        <div className="form-floating mb-2">
                            <input type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Note title"
                                required
                                value={title} onChange={(event) => setTitle(event.target.value)}
                            />
                            <label htmlFor="floatingInput">Note title</label>
                        </div>

                        <textarea className="form-control mb-2"
                            rows={15} id="comment"
                            name="text"
                            placeholder="Write your note"
                            required
                            value={note} onChange={(event) => setNote(event.target.value)}
                        >
                        </textarea>

                        <button className="w-100 btn btn-lg" type="submit" style={{
                            "backgroundColor": "#38568C",
                            "color": "#F7DD88"
                        }}>
                            <b>Create <FiPlusCircle /></b>
                        </button>
                        <div className="text-center">
                            <Footer />
                        </div>

                    </form>

                )

            }


        </>

    )

}

export default CreateNote
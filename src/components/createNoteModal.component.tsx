import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { useState } from 'react'
import supabase from '../supabase';

function CreateNoteModal() {

    const [title, setTitle] = useState('')

    const [note, setNote] = useState('')

    const

    //const [userId, setUserId] : any = useState('')

    const handleCreateNote = async (event : any) => {

        event.preventDefault()

        //alert(`${title}`)

        // fetching user id 
        try {

            const { data } : any = await supabase.auth.getUser()

            if(data){

                console.log(data)

                //alert(`${data.user.id}`)

            }else{

                console.log("could not fetch user data")

            }

        } catch(error){



        }

    }

    return (

        <>

            <div className="modal" id="createNoteModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"><FiPlusCircle /> Create Note</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">

                            <form onSubmit={handleCreateNote}>

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

                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}

export default CreateNoteModal
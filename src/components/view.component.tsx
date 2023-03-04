import React from 'react'
//import { MdNotes } from "react-icons/md";
import { useParams } from 'react-router-dom'

function ViewNotesComp(){

    const { heading, content } = useParams()

    return (

        <>
        
         <div className="px-4 pt-3 my-5 text-center mx-auto" style={{ "maxWidth": "330px" }}>

                <h2>{ heading }</h2>

                <div className="container pt-4 mb-3" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>

                    <p>{content}</p>

                </div>


            </div>
        
        </>

    )

}

export default ViewNotesComp
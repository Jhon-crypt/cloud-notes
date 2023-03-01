import React from 'react'
import {FiPlusCircle} from "react-icons/fi";

function CreateNoteButton(){

    return (

        <>
        
            <div className="px-4 pt-3 my-5 text-center mx-auto" style={{ "maxWidth": "330px" }}>

                <button className="w-100 btn btn-lg" style={{ "backgroundColor" : "#F7DD88","color" : "#38568C" }}>

                    Create Notes <FiPlusCircle />

                </button>

            </div>
        
        </>

    )

}

export default CreateNoteButton
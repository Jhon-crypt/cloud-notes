import React from 'react'
import { FiPlusCircle } from "react-icons/fi";

function CreateNoteModal() {

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

                            <form>
                                
                                <textarea className="form-control mb-2" rows={15} id="comment" name="text"></textarea>

                                <button className="w-100 btn btn-lg" type="submit" style={{ 
                                    "backgroundColor" : "#38568C",
                                    "color" : "#F7DD88" 
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
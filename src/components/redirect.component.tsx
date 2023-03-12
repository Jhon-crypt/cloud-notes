import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

function Redirect(){

    let navigate = useNavigate()

    useEffect(() => {
      
        navigate("/Notes")
      
    }, [navigate])
    

    return(

        <></>

    )

}

export default Redirect
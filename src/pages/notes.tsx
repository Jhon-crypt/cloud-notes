import React from 'react'
import Notes from '../components/notes.component'
import { useState, useEffect } from 'react'
import supabase from '../supabase';
//import LoginGuard from '../api/loginGuard'

function NotesPage(
) {


    const [userLoginStatus, setUserLoginStatus]: any = useState(false)


    useEffect(() => {

        const checkUserLogin = async () => {

            try {

                const { data, error } = await supabase.auth.getSession()

                if (!data.session) {

                    console.log(error)

                    setUserLoginStatus(false)


                } else {

                    console.log(data)

                    setUserLoginStatus(true)

                }


            } catch (error) {

                console.log(error)

            }

        }

        checkUserLogin()

    }, [])



    return (

        <>

            {userLoginStatus ?

                (
                    <Notes />

                ) : (

                    <h1>Not Signed In</h1>

                )

            }

        </>


    )

}

export default NotesPage


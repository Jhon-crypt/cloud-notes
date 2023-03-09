import React from 'react'
import Notes from '../components/notes.component'
import { useState, useEffect } from 'react'
import supabase from '../supabase';
import LogOut from '../components/logout';

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

                    <LogOut />

                )

            }

        </>


    )

}

export default NotesPage


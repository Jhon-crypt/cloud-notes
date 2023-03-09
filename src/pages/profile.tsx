import React from 'react'
import Profile from '../components/profile.components'
import { useEffect, useState } from 'react'
import supabase from '../supabase';
import LogOut from '../components/logout.component';

function ProfilePage(){

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

                    <Profile />

                ) : (

                    <LogOut />

                )

            }
        
        
        </>

    )

}

export default ProfilePage
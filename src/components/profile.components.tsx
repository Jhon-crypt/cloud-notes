import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { useState } from 'react'
import supabase from '../supabase';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'


function Profile() {

    let navigate = useNavigate()

    const [loading, setLoading] = useState(false)



    async function handleLogout() {

        try {

            setLoading(true)

            const { error } = await supabase.auth.signOut()

            if (error) {

                console.log(error)

            } else {

                setLoading(false)

                navigate("/")

            }

        } catch (error) {

            console.log(error)

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

                    <>


                        <div className="container px-4 pt-3 my-5 text-center">

                            <h2>Profile <BiUserCircle /></h2>

                            <div className="mt-4">

                                <div className="card mx-auto" style={{ width: '300px' }}>

                                    <div className="card-body">

                                        <BiUserPin style={{ "fontSize": "100px" }} />
                                        <h3>Oladele John</h3>
                                        <p>johnoladele690@gmail.com</p>

                                        <button onClick={handleLogout} className="btn btn-danger">

                                            Logout <BiLogOutCircle />

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>



                    </>

                )


            }

        </>

    )

}

export default Profile
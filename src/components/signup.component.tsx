import React from 'react'
import Footer from './footer.component'
import { BiUserCircle } from "react-icons/bi";
import { useState } from 'react'
import supabase from '../supabase';
import { Oval } from 'react-loader-spinner'
import { Navigate } from 'react-router-dom';

function Signup() {

    const [fullName, setFullName] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const [errorStatus, setErrorStatus] = useState(false)

    const handleSignup = async (event: any) => {


        event.preventDefault();

        try {

            setLoading(true)

            const { data, error } = await supabase.auth.signUp({
                email: `${email}`,
                password: `${password}`,
                options: {
                    data: {

                        full_name: `${fullName}`,

                    }
                }
            })

            setLoading(false)

            console.log(data)

            console.log(error)

            if(error){

                console.log(error)

            }else{

                setErrorStatus(true)

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


                    <>

                    {errorStatus ? (

                        <Navigate to="/AccountCreated" replace={true} />

                        ) : (

                            <></>

                        )
                    }
                    
                    
                    <div className="px-4 pt-5 my-5 text-center">

                        <form className="mx-auto" style={{ "maxWidth": "330px" }} onSubmit={handleSignup}>
                            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

                            <div className="form-floating mb-2">
                                <input type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Name"
                                    value={fullName} onChange={(event) => setFullName(event.target.value)}
                                    required />
                                <label htmlFor="floatingInput">Full name</label>
                            </div>

                            <div className="form-floating mb-2">
                                <input type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={email} onChange={(event) => setEmail(event.target.value)}
                                    required />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-2">
                                <input type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password} onChange={(event) => setPassword(event.target.value)} 
                                    minLength={6}
                                    required />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>


                            <button type="submit" className="w-100 btn btn-lg"
                                style={{ "backgroundColor": "#38568C", "color": "#F7DD88" }}>
                                <b>Sign up <BiUserCircle /></b>
                            </button>

                        </form>

                        <Footer />

                    </div></>

                )
            }


        </>

    )

}

export default Signup
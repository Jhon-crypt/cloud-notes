import React from 'react'
import {Outlet, Link} from "react-router-dom"
import Footer from './footer.component'
import { BiLogInCircle } from "react-icons/bi";
import { useState } from 'react'
import supabase from '../supabase';
import { Oval } from 'react-loader-spinner'
//import { Navigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session';


function Login() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const [loginStatus, setLoginStatus] = useState(false)

    const [errorStatus, setErrorStatus] = useState(false)

    const [userName, setUserName] : any = useState('')


    const handleLogin = async (event: any) => {

        setLoading(true)

        event.preventDefault();

        try {

            const { data, error } : any = await supabase.auth.signInWithPassword({
                email: `${email}`,
                password: `${password}`,
            })

            setLoading(false)

            if (error) {

                console.log(error)

                //alert(error)

                setErrorStatus(true)

            } else {

                console.log(data)

                setErrorStatus(false)

                setLoginStatus(true)

                //set seesion
                ReactSession.setStoreType("localStorage");

                ReactSession.set("user", data.user.email);

                ReactSession.get("user")

                setUserName(data.user.user_metadata.full_name)

                console.log(ReactSession.get("user"))

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

                        <div className="px-4 pt-5 my-5 text-center">

                            <form className="mx-auto" style={{ "maxWidth": "330px" }} onSubmit={handleLogin}>
                                <h1 className="h3 mb-3 fw-normal">Login</h1>

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

                                {errorStatus ? (

                                    <>

                                        <div className="alert alert-warning alert-dismissible w-100">
                                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                            Wrong email or password
                                        </div>

                                    </>

                                ) : (
                                    <>

                                        {loginStatus ? (

                                            <>

                                                <div className="alert alert-success alert-dismissible w-100">
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                                    Welcome {userName}, 
                                                    click <Link to="/Notes">here</Link> to continue
                                                </div>

                                            </>

                                        ) : (
                                            <></>
                                        )

                                        }

                                    </>
                                )

                                }


                                <button type="submit" className="w-100 btn btn-lg" style={{ "backgroundColor": "#F7DD88", "color": "#38568C" }}>
                                    <b>Login <BiLogInCircle /></b>
                                </button>

                            </form>

                            <Footer />

                        </div>

                    </>

                )
            }

            <Outlet />

        </>

    )

}


export default Login


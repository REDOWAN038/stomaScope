import React, { useEffect, useRef } from 'react'
import Layout from "../../components/Layout/Layout"
import Microscope from "../../img/img3c.png"
import "./auth.css"
import { NavLink, useNavigate } from "react-router-dom"
import axios from 'axios'
import { message } from "antd"


const SignUp = () => {
    const navigate = useNavigate()
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const name = nameRef.current.value
            const email = emailRef.current.value
            const password = passwordRef.current.value

            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/register`,
                {
                    name,
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            )

            if (res?.data?.success) {
                message.info(res?.data?.message)
                navigate("/users/signin")
            }
        } catch (error) {
            if (error?.response?.status === 409) {
                message.info(error?.response?.data?.message);
                navigate("/users/signin")
            } else if (error?.response?.status === 500) {
                message.error(error?.response?.data?.message);
            } else {
                message.error("check your network connection")
            }
        }
    }

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    return (
        <Layout>
            <div className="signup_login">
                <div className="signup">
                    <img src={Microscope} alt="microscope" className="img3" />
                </div>

                <form action="post" className="userform" onSubmit={handleSubmit}>
                    <h2 className='font-semibold'>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" ref={nameRef} required />
                        <label for="">Full Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" ref={emailRef} required />
                        <label for="">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" ref={passwordRef} required />
                        <label for="">Password</label>
                    </div>
                    <div className="remember">
                        <label
                        ><input type="checkbox" required /> I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" className="button">Sign Up</button>
                    <div className="signUp-link">
                        <p>
                            Already have an account?
                            <NavLink to="/users/signin" className="signInBtn-link">Sign In</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default SignUp
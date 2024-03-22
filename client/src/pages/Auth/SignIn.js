import React, { useContext, useEffect, useRef } from 'react'
import Layout from "../../components/Layout/Layout"
import Microscope from "../../img/img3c.png"
import { NavLink, useNavigate } from "react-router-dom"
import "./auth.css"
import AuthContext from '../../context/authContext'
import axios from "axios"
import { message } from "antd"

const SignIn = () => {
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const { setLoggedUser } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const email = emailRef.current.value
            const password = passwordRef.current.value

            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/login`,
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            )

            if (res?.data?.success) {
                setLoggedUser(res?.data?.payload)
                localStorage.setItem("user", JSON.stringify(res?.data?.payload))

                message.success(res?.data?.message)
                navigate("/")
            }
        } catch (error) {
            if (error?.response?.status === 404) {
                message.error(error?.response?.data?.message);
                navigate("/users/signup")
            } else if (error?.response?.status === 401) {
                message.error(error?.response?.data?.message);
            } else {
                message.error("check your network connection")
            }
        }
    }

    useEffect(() => {
        emailRef.current.focus()
    }, [])
    return (
        <Layout>
            <div className="signup_login">
                <div className="signup">
                    <img src={Microscope} alt="microscope" className="img3" />
                </div>


                <form method="post" className="userform" onSubmit={handleSubmit}>
                    <h2 className='font-semibold'>Sign In</h2>

                    <div className="input-group">
                        <input type="email" ref={emailRef} required />
                        <label for="">Email</label>
                    </div>

                    <div className="input-group">
                        <input type="password" ref={passwordRef} required />
                        <label for="">Password</label>
                    </div>

                    <div className="remember">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>

                    <button type="submit" className="button">Sign In</button>

                    <div className="signUp-link">
                        <p>
                            <NavLink to="/users/reset-password" className="signUpBtn-link">Forget Your Password?</NavLink>
                        </p>
                    </div>

                    <div className="signUp-link">
                        <p>
                            Don't have an account?
                            <NavLink to="/users/signup" className="signUpBtn-link">Sign Up</NavLink>
                        </p>
                    </div>

                </form>
            </div>
        </Layout>
    )
}

export default SignIn
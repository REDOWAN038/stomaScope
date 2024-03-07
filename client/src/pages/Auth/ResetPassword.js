import React, { useEffect, useRef } from 'react'
import Layout from "../../components/Layout/Layout"
import Microscope from "../../img/img3c.png"
import "./auth.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { message } from "antd"


const ResetPassword = () => {
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const newPasswordRef = useRef(null)
    const confirmPasswordRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const email = emailRef.current.value
            const newPassword = newPasswordRef.current.value
            const confirmPassword = confirmPasswordRef.current.value

            const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/reset-password`,
                {
                    email,
                    newPassword,
                    confirmPassword
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
            if (error?.response?.status === 404) {
                message.info(error?.response?.data?.message);
                navigate("/users/signup")
            } else if (error?.response?.status === 500) {
                message.error(error?.response?.data?.message);
            } else if (error?.response?.status === 400) {
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

                <form action="post" className="userform" onSubmit={handleSubmit}>
                    <h2 className='font-semibold'>Reset Password</h2>
                    <div className="input-group">
                        <input type="email" ref={emailRef} required />
                        <label for="">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" ref={newPasswordRef} required />
                        <label for="">New Password</label>
                    </div>
                    <div className="input-group">
                        <input type="password" ref={confirmPasswordRef} required />
                        <label for="">Confirm New Password</label>
                    </div>
                    <button type="submit" className="button">Reset Password</button>
                </form>
            </div>
        </Layout>
    )
}

export default ResetPassword
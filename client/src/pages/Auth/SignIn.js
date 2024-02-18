import React, { useContext, useEffect, useRef } from 'react'
import Layout from "../../components/Layout/Layout"
import Microscope from "../../img/img3c.png"
import { NavLink } from "react-router-dom"
import "./auth.css"
import AuthContext from '../../context/authContext'

const SignIn = () => {
    const email = useRef(null)
    const password = useRef(null)
    const { signinApiCall } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            signinApiCall(email.current.value, password.current.value)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        email.current.focus()
    }, [])
    return (
        <Layout>
            <div className="signup_login">
                <div className="signup">
                    <img src={Microscope} alt="microscope" className="img3" />
                </div>

                <form method="post" className="userform" onSubmit={handleSubmit}>
                    <h2>Sign In</h2>

                    <div className="input-group">
                        <input type="email" ref={email} required />
                        <label for="">Email</label>
                    </div>

                    <div className="input-group">
                        <input type="password" ref={password} required />
                        <label for="">Password</label>
                    </div>

                    <div className="remember">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>

                    <button type="submit" className="button">Sign In</button>

                    <div className="signUp-link">
                        <p>
                            Don't have an account?
                            <NavLink to="/signup" className="signUpBtn-link">Sign Up</NavLink>
                        </p>
                    </div>

                </form>
            </div>
        </Layout>
    )
}

export default SignIn
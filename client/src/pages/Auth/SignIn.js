import React from 'react'
import Layout from "../../components/Layout/Layout"
import Microscope from "../../img/img3c.png"
import { NavLink } from "react-router-dom"
import "./auth.css"

const SignIn = () => {
    return (
        <Layout>
            <div className="signup_login">
                <div className="signup">
                    <img src={Microscope} alt="microscope" className="img3" />
                </div>

                <form action="" method="post" className="userform">
                    <h2 className='font-semibold'>Sign In</h2>

                    <div className="input-group">
                        <input type="email" required />
                        <label for="">Email</label>
                    </div>

                    <div className="input-group">
                        <input type="password" required />
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
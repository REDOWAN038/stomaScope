import React from 'react'
import Layout from "../../components/Layout/Layout"
import Microscope from "../../img/img3c.png"
import "./auth.css"
import { NavLink } from "react-router-dom"


const SignUp = () => {
    return (
        <Layout>
            <div className="signup_login">
                <div className="signup">
                    <img src={Microscope} alt="microscope" className="img3" />
                </div>

                <form action="" className="userform">
                    <h2 className='font-semibold'>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label for="">Full Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" required />
                        <label for="">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required />
                        <label for="">Password</label>
                    </div>
                    <div className="remember">
                        <label
                        ><input type="checkbox" /> I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" className="button">Sign Up</button>
                    <div className="signUp-link">
                        <p>
                            Already have an account?
                            <NavLink to="/signin" className="signInBtn-link">Sign In</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default SignUp
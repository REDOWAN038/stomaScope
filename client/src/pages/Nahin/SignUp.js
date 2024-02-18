import React from 'react';
import './style.css'
import SideImg from './img3c.png'

const SignupForm = () => {
  return (
    <div className="signup_login">
      <div className="signup">
        <img src={SideImg} alt="microscope" className="img3" />
        <p>Sign Up for better Experience</p>
      </div>

      <form action="" className="userform">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input type="text" required />
          <label>Full Name</label>
        </div>
        <div className="input-group">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="remember">
          <label><input type="checkbox" /> I agree to the terms & conditions</label>
        </div>
        <button type="submit" className="button">Sign Up</button>
        <div className="signUp-link">
          <p>
            Already have an account?
            <a href="login.html" className="signInBtn-link">Log In</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

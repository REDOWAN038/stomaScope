import React from 'react';
import './style.css'
import SideImg from './img3c.png'

const SignIn = () => {
  return (
    <div className="signup_login">
      <div className="signup">
        <img src={SideImg} alt="microscope" className="img3" />
      </div>
      
      <form action="" method="post" className="userform">
        <h2>Login</h2>

        <div className="input-group">
          <input type="email" required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input type="password" required />
          <label>Password</label>
        </div>

        <div className="remember">
          <label><input type="checkbox" /> Remember me</label>
        </div>

        <button type="submit" className="button">Login</button>
        
        <div className="signUp-link">
          <p>
            Don't have an account?
            <a href="signup.html" className="signUpBtn-link">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

import React from 'react'
import './signIn.css';


export default function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-left">
        <img
          src="/signIn.png"
          alt="Happy person with pets"
          className="signin-image"
        />
      </div>
      <div className="signin-right">
        <h1 className="signin-title">Sign In</h1><br/>
        <p className="signin-subtitle">Welcome Back!<br/> Enter your information below</p><br/>
        <form className="signin-form">
          <div className="form-group">

            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" required />
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
            <div className='form-options'>
            <div className='remember_me'>
            <label>
              <input type="checkbox" />
              Remember Me
            </label></div>
            <div>
            <a href="/" className="forgot-password">Forgot Password?</a>
            </div></div>
          <button type="submit" className="signin-button">Log In</button>
          <div className="signin-divider">or</div>
          <button type="button" className="google-signin-button">
            Sign in with Google
          </button>
        </form>
        <p className="signup-prompt">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

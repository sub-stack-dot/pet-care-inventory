import React from 'react'
import './signUp.css';

export default function SignUp() {
  return (
    <div className="signup-container">
    <div className="signup-left">
      <img
        src="/SignUp.png"
        alt="Person with pets"
        className="signup-image"
      />
    </div>
    <div className="signup-right">
      <h1 className="signup-title">Sign Up</h1>
      <p className="signup-subtitle">Create your account to get started</p>
      <form className="signup-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <div className="signup-divider">or</div>
        <button type="button" className="google-signup-button">
          Sign up with Google
        </button>
      </form>
      <p className="signin-prompt">
        Already have an account? <a href="http://localhost:3000/SignIn">Sign In</a>
      </p>
    </div>
  </div>
  )
}

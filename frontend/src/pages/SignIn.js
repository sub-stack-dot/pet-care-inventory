import React from 'react'
import './signIn.css';
import Validation from './LoginValidation';


export default function SignIn() {
  const[values, setValues]=useState({
    email: '',
    password: ''
  })
  const[errors,setErrors]=useState({})

  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault(); 
    setValues(Validation(values));
  }
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
        <form className="signin-form" action="" onSubmit={handleSubmit}>
          <div className="form-group">

            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" name='email'
            onChange={handleInput}  required />
            {errors.email && <span classname='text-danger'>{errors.email}</span>}
            <label>Password</label>
            <input type="password" placeholder="Enter password" name='password' 
            onChange={handleInput} required />
            {errors.password && <span classname='text-danger'>{errors.password}</span>}

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
          Don’t have an account? <a href="http://localhost:3000/SignUp">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

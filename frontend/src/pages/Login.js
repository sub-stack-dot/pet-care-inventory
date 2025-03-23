import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Create a separate CSS file for styling

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3004/login', formData);
      console.log('Login Successful:', response.data);
      alert('Login Successful!');
      navigate('/Services');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message || 'Unknown error');
      alert('Login Failed, please register.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-header">Login</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              className="input-field"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
        <div className="register-link">
          <p>Don't have an account?</p>
          <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

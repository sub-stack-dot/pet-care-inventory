import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './registration.css'; // Create a separate CSS file for styling

function Registration() {
  const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3004/register', formData);
      console.log('Registration Successful:', response.data);
      alert('Registration Successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message || 'Unknown error');
      alert('Registration Failed. Please try again.');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h3 className="registration-header">Register</h3>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="input-group">
            <label htmlFor="fullname" className="input-label">Full Name</label>
            <input
              type="text"
              className="input-field"
              id="fullname"
              name="fullname"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

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

          <button type="submit" className="submit-btn">Register</button>
        </form>
        <div className="login-link">
          <p>Already have an account?</p>
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;

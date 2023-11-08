// src/components/RegistrationForm.js


import axios from 'axios';
import React, { useState } from 'react';


function RegistrationForm() {
  const [formData, setFormData] = useState({
    userName: '',
    userPassword: '',
    email: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', formData);

      if (response && response.data) {
        console.log(response.data); // Handle success (e.g., show a success message)
      } else {
        console.error('Response data is undefined.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data); // Handle registration error (e.g., show an error message)
      } else {
        console.error('Error response data is undefined.');
      }
    }
  }

  const pageStyle = {
    backgroundColor: '#301E67', // Blue background color
    minHeight: '100vh',
  };

  return (
    <div style={{backgroundColor:'#301E67'}}>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-5 shadow">
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPassword" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              name="userPassword"
              value={formData.userPassword}
              onChange={(e) => setFormData({ ...formData, userPassword: e.target.value })}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email:</label>
            
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email address"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" >Register</button>
        </form>
      </div>
    </div>
 </div> );
}

export default RegistrationForm;

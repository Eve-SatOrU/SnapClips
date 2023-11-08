import axios from 'axios';
import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    userName: '',
    userPassword: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', formData);
      console.log(response.data); // Handle success
    } catch (error) {
      console.error(error.response.data); // Handle login error
    }
  }

  return (
    <div style={{backgroundColor:'#301E67'}}>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow">
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Username</label>
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
          <div className="mb-4">
            <label htmlFor="userPassword" className="form-label">Password</label>
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
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    </div></div>
  );
}

export default LoginForm;

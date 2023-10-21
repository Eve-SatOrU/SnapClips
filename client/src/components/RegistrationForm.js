import React, { useState } from 'react';
import axios from 'axios';

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
      console.log(response.data); // Handle success
    } catch (error) {
      console.error(error.response.data); // Handle registration error
    }
  }

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
          placeholder="Username"
        />
        <input
          type="password"
          name="userPassword"
          value={formData.userPassword}
          onChange={(e) => setFormData({ ...formData, userPassword: e.target.value })}
          placeholder="Password"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

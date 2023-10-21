import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
        placeholder="Username"
      />
      {/* Password input */}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

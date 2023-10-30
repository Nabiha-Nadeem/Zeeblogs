import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="form-container">
  <form onSubmit={handleSubmit}>
    <div className="form-field">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="form-field">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button type="submit">Login</button>
  </form>
</div>

  );
};

export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  // state variables
  const [username, setUsername] = useState('hui');
  const [password, setPassword] = useState('');
  const [confirmPW, setConfirmPw] = useState('');
  const [secretCode, setSecretCode] = useState('');

  return (
    <div className="Register">
      <h1>Register admin</h1>
      <p>Sign up as an administrator.</p>

      <div className="form-item">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="jigglypuff"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="At least 8 characters"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label htmlFor="admin_code">Secret code</label>
        <input
          type="password"
          name="admin_code"
          placeholder="Given by the admin"
          onChange={(e) => setSecretCode(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </div>
  );
}

export default Register;

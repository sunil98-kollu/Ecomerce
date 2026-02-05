import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import CommonInput from "../Components/CommonComponents/CommonInput";
import CommonButton from "../Components/CommonComponents/CommonBotton";
import '../Components/CommonCSS/Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/products');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <CommonInput
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <CommonInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <CommonButton className="login-button" type="submit" text="Login"></CommonButton>
        <div className="login-link">
          <p>
            Already have an account? <CommonButton onClick={() => navigate('/register')}>Register</CommonButton>
          </p>
        </div>
      </form>
    </div>
  );
}

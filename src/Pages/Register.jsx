import {React,useState} from "react";
import {  useNavigate } from "react-router-dom";
import CommonInput from "../Components/CommonComponents/CommonInput";
import CommonBotton from "../Components/CommonComponents/CommonBotton";
import '../Components/CommonCSS/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setconformPassword] = useState("");

  const handleClickRegister = (e) => {
    e.preventDefault();
    
    localStorage.setItem('user', JSON.stringify({ firstName, lastName, email, password }));
  };
  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleClickRegister} className="register-form">
        <CommonInput
          type="text"
          label="FirstName"
          placeholder="Enter FirstName"
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
          value={firstName}
        />
        <CommonInput
          type="text"
          label="LastName"
          placeholder="Enter LastName"
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          value={lastName}
        />
        <CommonInput
          type="email"
          label="Email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
        />
        <CommonInput
          type="password"
          label="Password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
        <CommonInput
          type="password"
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          onChange={(e) => setconformPassword(e.target.value)}
          name="conformPassword"
          value={conformPassword}
        />
        <CommonBotton className="register-button" type="submit">Register</CommonBotton>
        <div className="register-link">
          <p>
            Already have an account? <CommonBotton onClick={() => navigate('/Login')}>Login</CommonBotton>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

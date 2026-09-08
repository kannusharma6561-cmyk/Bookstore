import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login()
    navigate("/profile");
    // console.log("Email:", email);
    // console.log("Password:", password);
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Welcome Back!</h1>
        <p>Login to continue</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="switch-auth">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
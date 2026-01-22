import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./admin.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const success = login(username, password);
    if (success) navigate("/admin");
    else alert("Invalid credentials");
  }

  return (
    <div className="admin-login">
      <div className="glass-card login-card">
        <h2>Admin Portal</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username (admin / staff)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password (1234)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary full-width">Login</button>
        </form>
      </div>
    </div>
  );
}

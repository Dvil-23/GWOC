import { useState, useEffect } from "react";
import "../Home.css";
import { FaUser, FaEnvelope, FaLock, FaTimes } from "react-icons/fa";

export default function SignUp({ open, onClose }) {
  const [mode, setMode] = useState("signup"); // signup | login | forgot

  // Reset every time modal opens
  useEffect(() => {
    if (open) {
      setMode("signup"); // or "login" if you want login as default
    }
  }, [open]);

  if (!open) return null;

  const title =
    mode === "signup" ? "Sign Up" : mode === "login" ? "Login" : "Reset Password";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="signup-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>{title}</h2>
        <div className="underline"></div>

        {mode === "signup" && (
          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Email Id" />
        </div>

        {mode !== "forgot" && (
          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" />
          </div>
        )}

        {mode !== "forgot" && (
          <p className="forgot">
            Lost Password?{" "}
            <span onClick={() => setMode("forgot")}>Click Here!</span>
          </p>
        )}

        <div className="btn-row">
          {mode === "signup" && (
            <>
              <button className="btn primary">Sign Up</button>
              <button className="btn secondary" onClick={() => setMode("login")}>
                Login
              </button>
            </>
          )}

          {mode === "login" && (
            <>
              <button className="btn primary">Login</button>
              <button className="btn secondary" onClick={() => setMode("signup")}>
                Sign Up
              </button>
            </>
          )}

          {mode === "forgot" && (
            <button className="btn primary">Send Reset Link</button>
          )}
        </div>
      </div>
    </div>
  );
}


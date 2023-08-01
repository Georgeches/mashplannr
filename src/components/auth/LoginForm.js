import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [id_number, setId_Number] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id_number, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful login here
          navigate("/merchant");
          response.json().then((user) => onLogin(user));
          // For example, redirect the user to the dashboard
        } else {
          // Handle login failure here
          // For example, display an error message
          response.json().then((err) => console.log(err));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-12 col-lg-6 login-right">
        <div className="login-header">
          <h3>
            Login <span></span>
          </h3>
          <p className="mb-0">Welcome back! Please enter your details.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-focus">
            <input
              type="text"
              className="form-control floating"
              id="id_number"
              name="id_number"
              value={id_number}
              onChange={(e) => setId_Number(e.target.value)}
            />
            <label className="focus-label" htmlFor="id">
              Id Number
            </label>
          </div>
          <div className="mb-3 form-focus">
            <input
              type="password"
              className="form-control floating"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="focus-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="text-end">
            <a className="forgot-link" href="forgot-password.html">
              Forgot Password?
            </a>
          </div>
          <button
            className="btn btn-primary w-100 btn-lg login-btn"
            type="submit"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account? &nbsp;
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

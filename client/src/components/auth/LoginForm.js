import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful login here
          // For example, redirect the user to the dashboard
        } else {
          // Handle login failure here
          // For example, display an error message
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="col-md-12 col-lg-6 login-right">
      <div className="login-header">
        <h3>
          Login <span>Merchant</span>
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-focus">
          <input
            type="email"
            className="form-control floating"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="focus-label" htmlFor="email">
            Email
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
    </div>
  );
};

export default LoginForm;

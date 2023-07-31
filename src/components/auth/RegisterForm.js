import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Perform form validation here (e.g., check for valid email format, strong password, etc.)
    // If validation passes, proceed with form submission

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        password,
      }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Failed to register.");
        }
      })
      .then((user) => {
        // Handle successful registration, e.g., show a success message, redirect to login page, etc.
        setIsLoading(false);
        navigate("/merchant");
        console.log("Registration successful:", user);
      })
      .catch((error) => {
        // Handle registration error, e.g., show an error message, reset form fields, etc.
        setIsLoading(false);
        console.error("Registration error:", error.message);
      });
  };

  return (
    <div>
      {/* Your header code goes here */}
      <div className="login-content-info container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="account-content">
              <div className="login-shapes">
                {/* Your shape images go here */}
              </div>
              <div className="account-info">
                <div className="login-back">
                  <a href="/">
                    <i className="fa-solid fa-arrow-left-long"></i> Back
                  </a>
                </div>
                <div className="login-title">
                  <h3>Merchant Signup</h3>
                  <p className="mb-0">
                    Welcome back! Please enter your details.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="mb-2">Name</label>
                    <input
                      className="form-control form-control-lg group_formcontrol form-control-phone"
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Address</label>
                    <input
                      type="password"
                      className="form-control"
                      id="address"
                      name="address"
                      placeholder="Enter Your Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <button
                      className="btn w-100 btn-primary"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>

                  <div className="account-signup">
                    <p>
                      Already Have an Account? <a href="/login">Sign in</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your mouse cursor code goes here */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
};

export default RegisterForm;

// <div className="mouse-cursor cursor-outer"></div>
// <div className="mouse-cursor cursor-inner"></div>
import React, { useState } from "react";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";

function Login() {
  const [showLogin, setShowLogin] = useState(true);

  // Placeholder function for handling successful login
  const onLogin = (user) => {
    // Handle successful login here
    console.log("User logged in:", user);
  };

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <a onClick={() => setShowLogin(false)}>Sign Up</a>
          </p>
        </>
      ) : (
        <>
          <RegisterForm onLogin={onLogin} />
          {/* <p>
            Already have an account? &nbsp;
            <span onClick={() => setShowLogin(true)}>Login</span>
          </p> */}
        </>
      )}
    </div>
  );
}

export default Login;
//  function redirectToDashboard(user) {
//    if (user.user_type === "customer") {
//      window.location.href = "/customerdash";
//    } else if (user.user_type === "restaurant_owner") {
//      window.location.href = "/restaurantdash";
//    } else if (user.user_type === "admin") {
//      window.location.href = "/admindash";
//    }
//  }
//  function handleSubmit(e) {
//    e.preventDefault();
//    fetch("/login", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify({ username, password }),
//    })
//      .then((r) => {
//        if (r.ok) {
//          r.json().then((user) => {
//            onLogin(user);
//            setErrorMessage(null);
//            redirectToDashboard(user);
//          });
//        } else {
//          setErrorMessage("Login details do not match");
//        }
//      })
//      .catch((error) => {
//        setErrorMessage("An error occurred. Please try again.");
//      });
//  }

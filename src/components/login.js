import React, { useState } from "react";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";

function Login({setUser, user}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} user={user} />
          <p>
            Don't have an account? &nbsp;
            <a onClick={() => setShowLogin(false)}>Sign Up</a>
          </p>
        </>
      ) : (
        <>
          <RegisterForm />
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

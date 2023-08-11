import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSession, useSupabaseClient} from '@supabase/auth-helpers-react'

const LoginForm = ({ setUser, user  }) => {
  const [id_number, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const session = useSession()
  const supabase = useSupabaseClient()

  let screenWidth = window.screen.width

  async function googleSignIn(e){
    e.preventDefault()
    const {error} = await supabase.auth.signInWithOAuth({
      provider:'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    })
    if(error){
      alert("Error logging in")
      console.log(error)
    }
  }

  async function signOut(e){
    e.preventDefault()
    await supabase.auth.signOut()
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_number, password }),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("invalid id number or password")
      }
    })
    .then((data) => {
      localStorage.setItem("current_user", JSON.stringify(data))
      navigate('/')
      window.location.reload()
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <>
    
    <div className="justify-content-center login-div" style={{ minHeight: "100vh", display: "flex", minWidth:`${screenWidth}px`}}>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        
        <div className="login-right">
        

          <div className="login-header">
          
            <h3>
              Login <span></span>
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 form-focus">
              <input
                type="text"
                className="form-control floating"
                id="idNumber"
                name="idNumber"
                value={id_number}
                onChange={(e) => setIdNumber(e.target.value)}
              />
              <label className="focus-label" htmlFor="idNumber">
                IdNumber
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
          <button className="btn-google mt-4" onClick={e=>googleSignIn(e)}>Continue with google</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginForm;

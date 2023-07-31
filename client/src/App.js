import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Header from "./components/Header";
import Login from "./components/login";
// import Merchant from "./components/Merchant";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Header onLogout={handleLogout} />
      <Home />
      {/* <Merchant /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/merchant" element={<Merchant />} /> */}
        <Route path="/merchant/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;

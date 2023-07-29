//
import Login from "./components/login"; // Make sure the path is correct

import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

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

  if (!user) return <Login onLogin={setUser} />;

  function handleLogout() {
    setUser(null);
  }
  return (
    <div className="App">
      <Header onLogout={handleLogout} />
      <Routes>
        <Route path="/merchant" element={<LoginForm />} />
        <Route path="/merchant" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;

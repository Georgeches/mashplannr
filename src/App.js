import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Header from "./components/Header";
import Login from "./components/login";
import MerchantPage from "./components/Merchants";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState(null);
  const [merchants, setMerchants] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentMerchant, setCurrentMerchant] = useState({});

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/merchandisers")
      .then((res) => res.json())
      .then((data) => setMerchants(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  function handleLogout() {
    setUser(null);
  }

  return (
    <BrowserRouter>
      <Header onLogout={handleLogout} />
      <div className="app d-flex justify-content-between">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Home merchants={merchants} orders={orders} />}
          />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/merchant/login" element={<LoginForm />} />
          <Route
            path="/merchants"
            element={
              <MerchantPage
                setCurrentMerchant={setCurrentMerchant}
                currentMerchant={currentMerchant}
                merchants={merchants}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

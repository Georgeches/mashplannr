import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

//components
import Home from "./components/Home";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Header from "./components/Header";
import Login from "./components/login";
import MerchantPage from './components/Merchants';

function App() {
  const [user, setUser] = useState(null);
  const [merchants, setMerchants] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(()=>{
    fetch("http://localhost:3000/merchandisers")
    .then(res=>res.json())
    .then(data=>setMerchants(data))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/orders")
    .then(res=>res.json())
    .then(data=>setOrders(data))
  }, [])

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
        <Route path="/merchants" element={
            <>
              <MerchantPage merchants={merchants}/>
            </>
          }>
          </Route>
      </Routes>
    </div>
  );
}

export default App;

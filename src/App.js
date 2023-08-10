import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import {useSession, useSupabaseClient} from '@supabase/auth-helpers-react'

//components
import Home from "./components/Home";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Header from "./components/Header";
import Login from "./components/login";
import MerchantPage from "./components/Merchants";
import Sidebar from "./components/Sidebar";
import Orders from "./components/Orders";
import Taskmanager from "./components/Taskmanager";
import Nopage from "./components/Nopage";
import Calendar from "./components/Calender";


function App() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [merchants, setMerchants] = useState([])
  const [orders, setOrders] = useState([])
  const [currentMerchant, setCurrentMerchant] = useState({})
  const [admins, setAdmins] = useState([])
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/merchandisers")
      .then((res) => res.json())
      .then((data) => setMerchants(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/admins")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);


  function handleLogout() {
    setUser({});
  }

  console.log(session?.user.email)

  useEffect(()=>{
    if(session){
      setUser(admins.find(admin=>admin?.email===session.user.email))
    }
  }, [session, admins])

  console.log(session)
  

  return (
    <BrowserRouter>
      {session?
      <>
      <Header
        user={user}
        setCurrentMerchant={setCurrentMerchant}
        onLogout={handleLogout}
        merchants={merchants}
        orders={orders}
        session={session}
        supabase={supabase}
      />
      <div className="app d-flex justify-content-between">
        <Sidebar session={session} supabase={supabase}/>
        

        <Routes>
          <Route
            path="*"
            element={
              <>
                <Nopage merchants={merchants} orders={orders} />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Home
                  setCurrentMerchant={setCurrentMerchant}
                  merchants={merchants}
                  orders={orders}
                />
              </>
            }
          ></Route>

          <Route path="/login" element={<Login onLogin={setUser} />} />

          <Route path="/register" element={<RegisterForm />} />

          <Route path="/merchant/login" element={<LoginForm />} />

          <Route path="/calendar" component={Calendar} />

          <Route
            path="/merchants"
            element={
              <>
                <MerchantPage
                  setCurrentMerchant={setCurrentMerchant}
                  currentMerchant={currentMerchant}
                  merchants={merchants}
                  orders={orders}
                />
              </>
            }
          ></Route>

          <Route
            path="/orders"
            element={
              <>
                <Orders
                  setCurrentMerchant={setCurrentMerchant}
                  merchants={merchants}
                  currentMerchant={"none"}
                />
              </>
            }
          ></Route>

          <Route
            path="/taskmanager"
            element={
              <>
                <Taskmanager
                  orders={orders}
                  setOrders={setOrders}
                  setCurrentMerchant={setCurrentMerchant}
                  currentMerchant={currentMerchant}
                  merchants={merchants}
                  session={session}
                />
              </>
            }
          ></Route>

            <Route path="/login" element={<Login setUser={setUser} user={user} />} />

            <Route path="/register" element={<RegisterForm />} />

            <Route path="/merchant/login" element={<LoginForm setUser={setUser}/>} />

            <Route path="/orders" element={
                <>
                  <Orders setCurrentMerchant={setCurrentMerchant} currentMerchant={currentMerchant} merchants={merchants}/>
                </>
              }>
            </Route>
        </Routes>
      </div>
      </>
      :
      <Routes>
        <Route path="/" element={<Login setUser={setUser} user={user} />} />
      </Routes>
      }
    </BrowserRouter>
  );
}

export default App;

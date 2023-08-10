import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import App from "./App";
import "./index.css";

const supabase = createClient(
    "https://nacotuoluoelfuolkzhj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hY290dW9sdW9lbGZ1b2xremhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NzEyNTAsImV4cCI6MjAwNzE0NzI1MH0.MLfYnB-YUdy2y8NBhi8Rpj2OGpQFkJcIHnGGcG4qo2c"
);

createRoot(document.getElementById('root')).render(
    <SessionContextProvider supabaseClient={supabase}>
        <App />
    </SessionContextProvider>
);

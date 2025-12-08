import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router";
import { ContextProvider } from "./context/ContextProvider";
import { UserProvider } from "./context/UserContext";


createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
);
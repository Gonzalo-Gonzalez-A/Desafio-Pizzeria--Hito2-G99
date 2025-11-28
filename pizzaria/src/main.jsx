import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router";
import ContextProvider from "./context/ContextProvider";


createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
);
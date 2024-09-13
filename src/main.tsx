import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { ToastContainer } from "react-toastify";
// import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <App />
    </BrowserRouter>
  </StrictMode>
);

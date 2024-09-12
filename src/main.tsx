import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer autoClose={3000} position="bottom-left" />
    <App />
  </StrictMode>
);

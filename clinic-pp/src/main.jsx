import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./frontend/libraries/fontawesome/css/all.min.css";
import "./frontend/styles/main.css";
import "./frontend/libraries/jquery/jquery-3.7.1.min.js";
import "./frontend/libraries/bootstrap/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

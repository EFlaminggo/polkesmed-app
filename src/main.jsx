import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./pages/protected/dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./frontend/libraries/fontawesome/css/all.min.css";
import "./frontend/styles/main.css";
import "./frontend/libraries/jquery/jquery-3.7.1.min.js";
import "./frontend/libraries/bootstrap/js/bootstrap.min.js";
import "./frontend/niceadmin/assets/css/style.css";
import "./frontend/niceadmin/assets/vendor/bootstrap/css/bootstrap.min.css";
import "./frontend/niceadmin/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./frontend/niceadmin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./frontend/niceadmin/assets/vendor/apexcharts/apexcharts.min.js";
import "./frontend/niceadmin/assets/vendor/chart.js/chart.umd.js";
import "./frontend/niceadmin/assets/vendor/echarts/echarts.min.js";
import "./frontend/niceadmin/assets/vendor/quill/quill.min.js";
import "./frontend/niceadmin/assets/vendor/simple-datatables/simple-datatables.js";
import "./frontend/niceadmin/assets/vendor/tinymce/tinymce.min.js";
import "./frontend/niceadmin/assets/vendor/php-email-form/validate.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Dashboard />
  </React.StrictMode>
);

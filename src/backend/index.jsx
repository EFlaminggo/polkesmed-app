import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard/assets/img/favicon.png";
import "./dashboard/assets/img/apple-touch-icon.png";

import "./dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "./dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "./dashboard/assets/vendor/quill/quill.snow.css";
import "./dashboard/assets/vendor/quill/quill.bubble.css";
import "./dashboard/assets/vendor/remixicon/remixicon.css";
import "./dashboard/assets/vendor/simple-datatables/style.css";
import "./dashboard/assets/css/style.css";

import "./dashboard/assets/vendor/apexcharts/apexcharts.min.js";
import "./dashboard/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./dashboard/assets/vendor/chart.js/chart.umd.js";
import "./dashboard/assets/vendor/echarts/echarts.min.js";
import "./dashboard/assets/vendor/quill/quill.min.js";
import "./dashboard/assets/vendor/simple-datatables/simple-datatables.js";
import "./dashboard/assets/vendor/tinymce/tinymce.min.js";
import "./dashboard/assets/vendor/php-email-form/validate.js";
import "./dashboard/assets/js/main.js";

import Dashboardheader from "./dashboard/Dashboardheader";
import Dashboardsidebar from "./dashboard/Dashboardsidebar";
import Dashboard from "./dashboard/Dashboard";
import Patient from "./pages/patient";
import OurDoctor from "./pages/ourdoctor.jsx";

function Index() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/ourdoctor" element={<OurDoctor />} />
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Dashboard />
      <Dashboardheader />
      <Dashboardsidebar />
    </>
  );
}
export default Index;

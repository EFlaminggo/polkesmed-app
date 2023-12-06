// Vendor CSS Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/simple-datatables/style.css";

// Template Main CSS File
import "./assets/css/style.css";

// Template Main JS File
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/apexcharts/apexcharts.min.js";
import "./assets/vendor/chart.js/chart.umd.js";
import "./assets/vendor/echarts/echarts.min.js";
import "./assets/vendor/quill/quill.min.js";
import "./assets/vendor/simple-datatables/simple-datatables.js";
import "./assets/vendor/tinymce/tinymce.min.js";
import "./assets/vendor/php-email-form/validate.js";
import "./assets/js/main.js";
import { Helmet } from "react-helmet";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

export default function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Header />
      <Sidebar />
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

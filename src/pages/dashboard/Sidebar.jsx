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

export default function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <i className="bi bi-building"></i>
            <span>Poliklinik</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="dokter/dokter.html">
            <i className="bi bi-person"></i>
            <span>Dokter</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pasien/pasien.html">
            <i className="bi bi-person"></i>
            <span>Pasien</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <i className="bi bi-person"></i>
            <span>Jadwa Janji</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

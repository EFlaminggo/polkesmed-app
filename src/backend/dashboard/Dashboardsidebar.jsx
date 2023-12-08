import { Link } from "react-router-dom";

export default function Dashboardsidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#poliklinik"
          >
            <i className="bi bi-building"></i>
            <span>Poliklinik</span>
          </a>
          <div id="poliklinik" className="collapse">
            {/* Isi dengan submenu yang sesuai */}
          </div>
        </li>
        <li className="nav-item">
          <Link to="/ourdoctor" className="nav-link">
            <i className="bi bi-person"></i>
            <span>Dokter</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/patient" className="nav-link">
            <i className="bi bi-person"></i>
            <span>Pasien</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#janji"
          >
            <i className="bi bi-person"></i>
            <span>Jadwa Janji</span>
          </a>
          <div id="janji" className="collapse">
            {/* Isi dengan submenu yang sesuai */}
          </div>
        </li>
      </ul>
    </aside>
  );
}

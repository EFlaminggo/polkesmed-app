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

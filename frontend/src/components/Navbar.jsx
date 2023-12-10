import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-1">Polkesmed</span>
          <span className="brand-2">-Health Care</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
            <li className="nav-item mx-2">
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/doctor"
                className="nav-link"
                activeClassName="active"
              >
                Dokter
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/services"
                className="nav-link"
                activeClassName="active"
              >
                Layanan
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/aboutus"
                className="nav-link"
                activeClassName="active"
              >
                Tentang Kami
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <NavLink
              to="/login"
              className="btn btn-login-register my-2 my-sm-0 px-3"
              activeClassName="active"
            >
              Login/Register
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

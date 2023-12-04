import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="brand-1">Polkesmed</span>
            <span className="brand-2">-Health Care</span>
          </Link>
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
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/doctor" className="nav-link">
                  Dokter
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/services" className="nav-link">
                  Layanan
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/aboutus" className="nav-link">
                  Tentang Kami
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link
                to="/login"
                className="btn btn-login-register my-2 my-sm-0 px-3"
              >
                Login/Register
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

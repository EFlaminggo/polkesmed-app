import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            {" "}
            <span className="brand-1">Polkesmed</span>
            <span className="brand-2">-Health Care</span>{" "}
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="dokter.html">
                  Dokter
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="layanan.html">
                  Layanan
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="tentang-kami.html">
                  Tentang Kami
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <a
                href="login.html"
                className="btn btn-login-register my-2 my-sm-0 px-3"
                type="submit"
              >
                Login/Register
              </a>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

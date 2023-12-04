import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="section-auth">
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="card">
            <div className="card-body">
              <h3 className="mb-4 text-center">Login</h3>
              <form action="success.html" method="POST">
                <div className="mb-4">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Masukkan email Anda"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Input password Anda"
                  />
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-submit-janji btn-lg w-100 mt-3"
                    type="submit"
                  >
                    Login
                  </button>
                  <p className="mt-3">
                    Belum punya akun? <Link to="/register">Daftar Disini</Link>{" "}
                    {/* Menggunakan Link dari react-router-dom */}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Helmet } from "react-helmet";

export default function Doctor() {
  return (
    <div>
      <Helmet>
        <title>Our Doctor</title>
      </Helmet>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {/* Isi navbar */}
      </nav>

      <section className="section-header">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-12 col-lg-12 text-center">
              <h2>Dokter</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section-page-dokter">
        <div className="container">
          <form className="row">
            <div className="col-lg-6 col-sm-4">
              <select
                name="filter_poliklnik"
                className="form-select form-select-lg"
              >
                <option selected disabled>
                  Cari dokter berdasarkan poli...
                </option>
                <option value="">Poli Umum</option>
                <option value="">Poli Gigi</option>
              </select>
            </div>
            <div className="col-lg-2 col-sm-2">
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-filter-dokter btn-lg mb-3 btn-block"
                >
                  Cari
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="d-grid">
                <a
                  href="janji-dengan-dokter.html"
                  className="btn btn-buat-janji btn-lg mb-3 btn-block"
                >
                  Janji Temu Dokter
                </a>
              </div>
            </div>
          </form>
          <hr />
          <div className="row list-dokter">
            <div className="col-md-6 col-lg-4 mb-sm-2 mb-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="dokter-thumbnail">
                        <div
                          className="dokter-image"
                          style={{
                            backgroundImage:
                              "url('frontend/images/doctor-list.jpg')",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <p className="card-kategori-dokter">Dokter Umum</p>
                      <h5 className="card-title">Dina Yusdiana, S.,Kep,Ns</h5>
                      <p className="card-text">Sel, 5 Nov | 09.00 - 17.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

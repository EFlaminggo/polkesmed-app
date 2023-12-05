export default function ListDoctor() {
  return (
    <section className="section-dokter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="dokter-title">Dokter</h2>
          </div>
        </div>
        <div className="row">
          {/* Repeat the following structure for each doctor */}
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="dokter-thumbnail">
                  <div
                    className="dokter-image"
                    style={{
                      backgroundImage:
                        "url('./src/frontend/images/doctor-list.jpg')",
                    }}
                  ></div>
                </div>
                <h5 className="card-title">Dina Yusdiana, S.,Kep,Ns</h5>
                <p className="card-text">Dokter Umum</p>
              </div>
            </div>
          </div>
          {/* Repeat the structure ends */}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <a
              href="dokter.html"
              className="btn btn-lg btn-dokter-selengkapnya"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

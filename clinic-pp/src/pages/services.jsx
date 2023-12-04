import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <section className="section-layanan">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card-layanan">
                <img src="frontend/images/layanan.jpg" alt="Gambar Card" />
                <div className="card-overlay">
                  <p className="card-text text-center">
                    Pemeriksaan Kesehatan Dasar
                  </p>
                </div>
              </div>
            </div>
            {/* Masukkan card lainnya di sini sesuai kebutuhan */}
          </div>
        </div>
      </section>
    </div>
  );
}

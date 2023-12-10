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
                <img
                  src="./src/frontend/images/layanan.jpg"
                  alt="Pemeriksaan Kesehatan Dasar"
                />
                <div className="card-overlay">
                  <p className="card-text text-center">
                    Pemeriksaan Kesehatan Dasar
                  </p>
                </div>
              </div>
            </div>
            {/* Add more cards like the one above */}
            <div className="col-md-4 mb-4">
              <div className="card-layanan">
                {/* Add your image and card content here */}
              </div>
            </div>
            {/* Add more cards if needed */}
          </div>
        </div>
      </section>
    </div>
  );
}

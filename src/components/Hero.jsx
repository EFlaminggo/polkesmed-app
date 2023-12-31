import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="section-welcome">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
            <div className="welcome-content">
              <h2>POLKESMED HEALTH CARE</h2>
              <h5>Making Your Life Healthier and Happier</h5>
              <Link to="/appointment">
                {" "}
                {/* Update the path to your schedule route */}
                <button className="btn btn-lg btn-buat-janji">
                  Janji Temu Dokter
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="welcome-image">
              <img
                src="./src/frontend/images/hero-directur.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

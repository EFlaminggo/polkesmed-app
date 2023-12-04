import { Helmet } from "react-helmet";

export default function Schedule() {
  return (
    <div>
      <Helmet>
        <title>Schedule</title>
      </Helmet>
      <section className="section-success">
        <div className="container text-center">
          <img src="frontend/images/success.png" alt="" />
          <h2>Berhasil Buat Janji Dengan Dokter!</h2>
          <p>
            Silahkan cek jam temu di halaman{" "}
            <u>
              <a href="#">dashboard Anda</a>
            </u>
          </p>
          <a href="index.html" className="btn btn-success-janji btn-lg">
            Home Page
          </a>
        </div>
      </section>
    </div>
  );
}

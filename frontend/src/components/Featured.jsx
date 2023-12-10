export default function Featured() {
  return (
    <section className="section-featured">
      <div className="container">
        <div className="row">
          <div className="col-md-4 featured-detail">
            <i className="far fa-calendar-check"></i>
            <p>Janji Temu Dengan Dokter</p>
          </div>
          <div className="col-md-4 featured-detail">
            <i className="fas fa-file-medical"></i>
            <p>Histori Rekam Medis</p>
          </div>
          <div className="col-md-4 featured-detail">
            <i className="fas fa-pills"></i>
            <p>Pelayanan Kesehatan Terpadu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Introduction() {
  return (
    <section className="section-intro">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
            <div className="intro-content">
              <h2>
                Selamat Datang di <br />
                Polkesmed Health Care
              </h2>
              <p>
                Kami senang menyambut Anda di Polkesmed Health Care. Tim medis
                kami yang berpengalaman siap membantu Anda dalam menerima
                perawatan kesehatan terbaik. Kami berkomitmen untuk memberikan
                perawatan yang penuh perhatian dan ramah kepada setiap pasien.
                Terima kasih telah memilih kami. Kami harap Anda memiliki
                pengalaman perawatan kesehatan yang positif dan pemulihan yang
                cepat. Selamat datang kembali!
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="intro-image">
              <img
                src="./src/frontend/images/intro-image.png"
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

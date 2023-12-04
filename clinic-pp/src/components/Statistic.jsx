import React from "react";

class Statistic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section-statistik">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>
                <span>35</span> Dokter Handal
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <span>5</span> Poliklinik
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <span>230</span> Pasien Berobat
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Statistic;

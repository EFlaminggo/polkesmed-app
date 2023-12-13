import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListDoctor() {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    // https://axios-http.com/docs/res_schema
    // TODO: Use .env or variable to keep consistent url
    axios.get("http://127.0.0.1:8000/api/v1/doctor").then((response) => {
      if (response.status == 200) {
        setDoctorList(response.data);
      }
    });
  });
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
          {doctorList.map((obj) => {
            // https://stackoverflow.com/questions/42801343/what-is-the-significance-of-keys-in-reactjs
            <div key={obj.uuid} className="col-md-3">
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
                  <h5 className="card-title">{obj.nama_dokter}</h5>
                  <p className="card-text">Dokter Umum</p>
                </div>
              </div>
            </div>;
          })}
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
            <Link to="/Doctor">
              {" "}
              {/* Update the path to your doctor details route */}
              <button className="btn btn-lg btn-dokter-selengkapnya">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

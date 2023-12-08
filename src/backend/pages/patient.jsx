import { Helmet } from "react-helmet";
import Dashboardheader from "../dashboard/Dashboardheader";
import Dashboardsidebar from "../dashboard/Dashboardsidebar";

export default function Patient() {
  return (
    <div>
      <Helmet>
        <title>Patient</title>
      </Helmet>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Pasien</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Pasien</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body py-4">
                  <a
                    href="dokter-add.html"
                    className="btn btn-primary btn-md mb-4"
                  >
                    <i className="bi bi-person-plus-fill"></i>{" "}
                    <span>Tambah Pasien</span>
                  </a>
                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Pasien</th>
                        <th scope="col">Status</th>
                        <th scope="col">Rekam Medis</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Data Pasien */}
                      <tr>
                        <th scope="row">1</th>
                        <td>Yola Anggriani</td>
                        <td>Mahasiswa</td>
                        <td>
                          <a
                            href="rekam-medis.html"
                            className="btn btn-md btn-info"
                          >
                            <i className="bi bi-file-medical"></i> Lihat
                          </a>
                        </td>
                        <td>
                          <a
                            href="dokter-edit.html"
                            className="btn btn-sm btn-warning"
                          >
                            <i className="bi bi-pencil"></i>
                          </a>
                          <a href="#" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </a>
                        </td>
                      </tr>
                      {/* Akhir Data Pasien */}
                    </tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Dashboardheader />
      <Dashboardsidebar />
    </div>
  );
}

import { Helmet } from "react-helmet";
import Dashboard from "../dashboard/Dashboard";
import Dashboardheader from "../dashboard/Dashboardheader";
import Dashboardsidebar from "../dashboard/Dashboardsidebar";

export default function Patient() {
  <Dashboard />;
  return (
    <div>
      <Helmet>
        <title>Patient</title>
      </Helmet>
      <Dashboardheader />
      <Dashboardsidebar />
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
                  <tbody>{/* Tambahkan baris tabel sesuai kebutuhan */}</tbody>
                </table>
                {/* End Table with stripped rows */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Helmet } from "react-helmet";
import Dashboardheader from "../dashboard/Dashboardheader";
import Dashboardsidebar from "../dashboard/Dashboardsidebar";

export default function OurDoctor() {
  return (
    <>
      <div>
        <Helmet>
          <title>Doctor</title>
        </Helmet>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Dokter</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Dokter</li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}

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
                      <span>Tambah Dokter</span>
                    </a>
                    {/* Table with stripped rows */}
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Nama Dokter</th>
                          <th scope="col">Poli</th>
                          <th scope="col">Photo</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Poli Umum</td>
                          <td>
                            <img
                              src="https://placehold.co/100"
                              alt=""
                              className="img-fluid"
                            />
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
    </>
  );
}

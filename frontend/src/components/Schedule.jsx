import { useEffect, useState } from "react";
import axios from "axios";
export default function Schedule() {
    const [poliklinik, setPoliklinik] = useState([]);
    useEffect(() => {
        // Define the API endpoint
        const apiUrl = "http://localhost:8000/api/v1/poliklinik";

        // Make a GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                // Handle the successful response
                return setPoliklinik(response.data.data);
            })
            .catch((error) => {
                // Handle errors
                console.error("Error fetching user data:", error);
            });
    }, []); //
    return (
        <>
            <section className="section-jadwal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="jadwal-title">Jadwal Praktek Poliklinik</h2>
                            <div className="accordion" id="accordionExample">
                                {poliklinik.map((poli) => {
                                    return (
                                        <div className="accordion-item" key={poli.uuid}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${poli.uuid}`}>
                                                    {poli.nama_poliklinik}
                                                </button>
                                            </h2>
                                            <div id={poli.uuid} className="accordion-collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <table className="table text-center">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Hari</th>
                                                                <th scope="col">Jam</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Senin</td>
                                                                <td>09.00-14.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Selasa</td>
                                                                <td>09.00-14.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rabu</td>
                                                                <td>09.00-14.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

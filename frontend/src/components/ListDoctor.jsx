import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ListDoctor() {
    const [doctorData, setDoctorData] = useState([]);
    useEffect(() => {
        // Define the API endpoint
        const apiUrl = "http://localhost:8000/api/v1/doctor";

        // Make a GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                // Handle the successful response
                return setDoctorData(response.data.data);
            })
            .catch((error) => {
                // Handle errors
                console.error("Error fetching user data:", error);
            });
    }, []); //
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
                    {doctorData.map((data) => {
                        return (
                            <div className="col-md-3" key={data.uuid}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="dokter-thumbnail">
                                            <div
                                                className="dokter-image"
                                                style={{
                                                    backgroundImage: "url('./src/frontend/images/doctor-list.jpg')",
                                                }}
                                            ></div>
                                        </div>
                                        <h5 className="card-title">{data.nama_dokter}</h5>
                                        <p className="card-text">{data.nama_poliklinik ?? "Poli not set"}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {/* <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="dokter-thumbnail">
                                    <div
                                        className="dokter-image"
                                        style={{
                                            backgroundImage: "url('./src/frontend/images/doctor-list.jpg')",
                                        }}
                                    ></div>
                                </div>
                                <h5 className="card-title">Dina Yusdiana, S.,Kep,Ns</h5>
                                <p className="card-text">Dokter Umum</p>
                            </div>
                        </div>
                    </div> */}
                    {/* Repeat the structure ends */}
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Link to="/Doctor">
                            {" "}
                            {/* Update the path to your doctor details route */}
                            <button className="btn btn-lg btn-dokter-selengkapnya">Selengkapnya</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

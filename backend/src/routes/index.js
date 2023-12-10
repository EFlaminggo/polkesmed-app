const express = require("express");
const doctor = require("./doctor");
const poliklinik = require("./poliklinik");
const jadwal = require("./jadwal_poliklinik");
const app = express();

const api = "/api/v1";
app.use(api, doctor); // http://url/doctor
app.use(api, poliklinik); // http://url/poliklinik
app.use(api, jadwal); // http://url/jadwal-poliklinik

module.exports = app;

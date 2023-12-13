const express = require("express");
const app = express();

const api = "/api/v1";
app.use(api, require("./doctor")); // http://url/doctor
app.use(api, require("./poliklinik")); // http://url/poliklinik
app.use(api, require("./jadwal_poliklinik")); // http://url/jadwal-poliklinik
app.use(api, require("./user"));
module.exports = app;

const express = require("express");
const doctor = require("./doctor");
const poliklinik = require("./poliklinik");
const app = express();

const api = "/api/v1";
app.use(api, doctor);
app.use(api, poliklinik);

module.exports = app;

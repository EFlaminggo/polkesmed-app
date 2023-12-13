const express = require("express");
const doctor = require("./doctor.router");
const poliklinik = require("./poliklinik.router");
const jadwal = require("./jadwalPoliklinik.router");
const router = express.Router();

const api = "/api/v1";
router.use(api, doctor); // http://url/doctor
router.use(api, poliklinik); // http://url/poliklinik
router.use(api, jadwal); // http://url/jadwal-poliklinik

module.exports = router;

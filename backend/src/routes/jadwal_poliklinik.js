const express = require("express");
const { getAll, getByPoliklinikId, create, update, deleteData } = require("../controllers/JadwalPoliklinikController");
const app = express();

app.get("/jadwal-poliklinik", getAll);
app.get("/jadwal-poliklinik/:id", getByPoliklinikId);
app.post("/jadwal-poliklinik", create);
app.put("/jadwal-poliklinik/:id", update);
app.delete("/jadwal-poliklinik/:id", deleteData);

module.exports = app;

const express = require("express");
const { getAll, getById, create, update, deleteData } = require("../controllers/PoliklinikController");
const app = express();

app.get("/poliklinik", getAll);
app.get("/poliklinik/:id", getById);
app.post("/poliklinik", create);
app.put("/poliklinik/:id", update);
app.delete("/poliklinik/:id", deleteData);

module.exports = app;

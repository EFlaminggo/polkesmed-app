const express = require("express");
const { getAll, create, update, getById, deleteDoctor } = require("../controllers/DoctorController");
const app = express();

app.get("/doctor", getAll);
app.get("/doctor/:id", getById);
app.post("/doctor", create);
app.put("/doctor/:id", update);
app.delete("/doctor/:id", deleteDoctor);
module.exports = app;

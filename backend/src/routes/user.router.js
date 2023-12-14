const express = require("express");
const { getAll, getById, create, update, deleteData } = require("../controllers/UserController");
const router = express.Router();

app.get("/user", getAll);
app.get("/user/:id", getById);
app.post("/user", create);
app.put("/user/:id", update);
app.delete("/user/:id", deleteData);

module.exports = router;

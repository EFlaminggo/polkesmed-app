const express = require("express");
const { getAll, create, update, getById, deleteDoctor } = require("../controllers/DoctorController");
const router = express.Router()

router.get("/doctor", getAll);
router.get("/doctor/:id", getById);
router.post("/doctor", create);
router.put("/doctor/:id", update);
router.delete("/doctor/:id", deleteDoctor);
module.exports = router;

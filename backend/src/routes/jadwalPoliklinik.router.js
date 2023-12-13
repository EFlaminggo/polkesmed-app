const express = require("express");
const {
  getAll,
  getByPoliklinikId,
  create,
  update,
  deleteData,
} = require("../controllers/JadwalPoliklinikController");
const router = express.Router();

router.get("/jadwal-poliklinik", getAll);
router.get("/jadwal-poliklinik/:id", getByPoliklinikId);
router.post("/jadwal-poliklinik", create);
router.put("/jadwal-poliklinik/:id", update);
router.delete("/jadwal-poliklinik/:id", deleteData);

module.exports = router;

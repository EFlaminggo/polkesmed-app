const db_pool = require("../config/database");
const { v4: uuidv4 } = require("uuid");

const getAllDoctors = () => {
    const SQLQuery = "SELECT td.*, tp.nama_poliklinik  FROM tb_dokter td LEFT JOIN tb_poliklinik tp ON td.poliklinik_id = tp.uuid";
    return db_pool.execute(SQLQuery);
};

const getById = (id) => {
    const SQLQuery = "SELECT * FROM tb_dokter WHERE uuid=?";
    return db_pool.execute(SQLQuery, [id]);
};

const createNewDoctor = (body) => {
    const SQLQuery = "INSERT into tb_dokter (uuid, nama_dokter, poliklinik_id, picture) VALUES (?,?,?)";
    return db_pool.execute(SQLQuery, [uuidv4(), body.nama_dokter, body.poliklinik_id, body.picture]);
};

const updateDoctor = (body, id) => {
    const SQLQuery = "UPDATE tb_dokter SET nama_dokter=?, poliklinik_id=? WHERE uuid=?";
    return db_pool.execute(SQLQuery, [body.nama_dokter, body.poliklinik_id, id]);
};

const deleteDoctor = (id) => {
    const SQLQuery = "DELETE FROM tb_dokter WHERE uuid=?";
    return db_pool.execute(SQLQuery, [id]);
};

module.exports = {
    getAllDoctors,
    createNewDoctor,
    updateDoctor,
    deleteDoctor,
    getById,
};

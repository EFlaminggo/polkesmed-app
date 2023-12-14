const db_pool = require("../config/database");
const { v4: uuidv4 } = require("uuid");

const table = "tb_poliklinik";

const getAll = () => {
    const SQLQuery = `SELECT * FROM ${table}`;
    return db_pool.execute(SQLQuery);
};

const getById = (id) => {
    const SQLQuery = `SELECT * FROM ${table} WHERE uuid=?`;
    return db_pool.execute(SQLQuery, [id]);
};

const createData = (body) => {
    const SQLQuery = `INSERT into ${table} (uuid, nama_poliklinik) VALUES (?,?)`;
    return db_pool.execute(SQLQuery, [uuidv4(), body.nama_poliklinik]);
};

const updateData = (body, id) => {
    const SQLQuery = `UPDATE ${table} SET nama_poliklinik=? WHERE uuid=?`;
    return db_pool.execute(SQLQuery, [body.nama_poliklinik, id]);
};

const deleteData = (id) => {
    const SQLQuery = `DELETE FROM ${table} WHERE uuid=?`;
    return db_pool.execute(SQLQuery, [id]);
};

const setNullDokterPoliklinik = (id) => {
    const SQLQuery = "UPDATE tb_dokter SET poliklinik_id=null WHERE poliklinik_id=?";
    return db_pool.execute(SQLQuery, [id]);
};

const deleteJadwalPoliklinik = (id) => {
    const SQLQuery = "DELETE FROM tb_jadwal_poliklinik WHERE poliklinik_id=?";
    return db_pool.execute(SQLQuery, [id]);
};

module.exports = {
    getAll,
    createData,
    updateData,
    deleteData,
    getById,
    setNullDokterPoliklinik,
    deleteJadwalPoliklinik,
};

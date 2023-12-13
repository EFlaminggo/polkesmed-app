const db_pool = require("../config/database");
const { v4: uuidv4 } = require("uuid");

const table = "tb_jadwal_poliklinik";

const getAll = () => {
    const SQLQuery = `SELECT * FROM ${table}`;
    return db_pool.execute(SQLQuery);
};

const getByPoliklinikId = (id) => {
    const SQLQuery = `SELECT * FROM ${table} WHERE poliklinik_id=?`;
    return db_pool.execute(SQLQuery, [id]);
};

const createData = (body) => {
    const SQLQuery = `INSERT into ${table} (uuid,hari,jam_buka,jam_tutup, poliklinik_id) VALUES (?,?,?,?,?)`;
    return db_pool.execute(SQLQuery, [uuidv4(), body.hari, body.jam_buka, body.jam_tutup, body.poliklinik_id]);
};

const updateData = (body, id) => {
    const SQLQuery = `UPDATE ${table} SET hari=?, jam_buka=?, jam_tutup=?  WHERE uuid=?`;
    return db_pool.execute(SQLQuery, [body.hari, body.jam_buka, body.jam_tutup, id]);
};

const deleteData = (id) => {
    const SQLQuery = `DELETE FROM ${table} WHERE uuid=?`;
    return db_pool.execute(SQLQuery, [id]);
};

module.exports = {
    getAll,
    createData,
    updateData,
    deleteData,
    getByPoliklinikId,
};

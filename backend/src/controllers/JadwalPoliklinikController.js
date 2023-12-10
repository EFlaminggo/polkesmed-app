const JadwalPoliklinik = require("../models/JadwalPoliklinik");

const getAll = async (req, res) => {
    try {
        const [data] = await JadwalPoliklinik.getAll();
        res.status(200).json({
            status: 200,
            message: "success",
            data,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err,
        });
    }
};

const getByPoliklinikId = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await JadwalPoliklinik.getByPoliklinikId(id);
        if (result.length) {
            res.status(200).json({
                status: 200,
                message: "success",
                data: result,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "Data Not Found",
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err,
        });
    }
};

const create = async (req, res) => {
    try {
        const { body } = req;
        const [result] = await JadwalPoliklinik.createData(body);
        if (result.affectedRows > 0) {
            res.status(201).json({
                status: 201,
                message: "success",
                data: body,
            });
        } else {
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err,
        });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const [result] = await JadwalPoliklinik.updateData(body, id);
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: "success",
                data: body,
            });
        } else {
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err,
        });
    }
};

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await JadwalPoliklinik.deleteData(id);
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: "success",
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "Data Not Found",
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err,
        });
    }
};

module.exports = {
    getAll,
    getByPoliklinikId,
    create,
    update,
    deleteData,
};

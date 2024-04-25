const { Library, User } = require("../models");
const ApiError = require("../utils/apiError");

const findLibrarys = async (req, res, next) => {
    try {
        let filters = {};
        if (req.query.libraryName) {
            filters.libraryName = req.query.libraryName;
        }
        if (req.query.city) {
            filters.city = req.query.city;
        }
        if (req.query.address) {
            filters.address = req.query.address;
        }
        if (req.query.userId) {
            filters.userId = req.query.userId;
        }

        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const librarys = await Library.findAndCountAll({
            where: filters,
            offset,
            limit,
        });

        res.status(200).json({
            status: "Success",
            data: {
                totalData: librarys.count,
                librarys: librarys.rows,
                totalPages: Math.ceil(librarys.count / limit),
                pageSize: limit,
                currentPage: page,
            },
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
    }
};


const findLibraryById = async (req, res, next) => {
    try {
        const library = await Library.findOne({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json({
            status: "Success",
            data: {
                library,
            },
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
    }
};

const updateLibrary = async (req, res, next) => {
    const { libraryName, city, address } = req.body;
    try {
        await Library.update(
            {
                libraryName,
                city,
                address,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        const updatedLibrary = await Library.findByPk(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "successful library update",
            updatedLibrary
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
    }
};

const deleteLibrary = async (req, res, next) => {
    try {
        const library = await Library.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!library) {
            next(new ApiError("The library ID does not exist", 404));
        }

        await library.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json({
            status: "Success",
            message: "Successfully deleted library",
        });
    } catch (err) {
        next(new ApiError(err.message, 500));
    }
};

const createLibrary = async (req, res, next) => {
    try {
        const { libraryName, city, address } = req.body;

        const library = await Library.create({
            libraryName,
            city,
            address,
            userId: req.user.id
        });

        res.status(201).json({
            status: "Success",
            data: {
                library,
            },
        });
    } catch (err) {
        next(new ApiError(err.message, 500)); // Memanggil next dengan ApiError sebagai parameter
    }
};


module.exports = {
    findLibrarys,
    findLibraryById,
    createLibrary,
    deleteLibrary,
    updateLibrary,
    createLibrary
};

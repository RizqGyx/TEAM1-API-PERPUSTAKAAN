const { Library } = require("../models");
const ApiError = require("../utils/apiError");

const findLibrarys = async (req, res, next) => {
    try {
        const librarys = await Library.findAll();

        res.status(200).json({
            status: "Success",
            data: {
                librarys,
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

        res.status(200).json({
            status: "Success",
            message: "sukses update library",
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
            next(new ApiError("Library id tersebut gak ada", 404));
        }

        await library.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json({
            status: "Success",
            message: "sukses delete library",
        });
    } catch (err) {
        next(new ApiError(err.message, 500));
    }
};

const createLibrary = async (req, res) => {
    try {
        const { libraryName, city, address } = req.body;

        const library = await Library.create({
            libraryName,
            city,
            address
        });

        res.status(201).json({
            status: "success",
            data: {
                library,
            },
        });
    } catch (err) {
        next(new ApiError(err.message, 500));
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

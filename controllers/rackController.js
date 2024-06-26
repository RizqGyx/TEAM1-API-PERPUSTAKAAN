const { Rack } = require("../models");
const ApiError = require("../utils/apiError");

const findRacks = async (req, res, next) => {
  try {
    const { rackNumber, floorNumber, libraryId, page, limit } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitData = parseInt(limit) || 10;
    const offset = (pageNum - 1) * limitData;

    const whereClause = {};
    if (rackNumber) whereClause.rackNumber = rackNumber;
    if (floorNumber) whereClause.floorNumber = floorNumber;
    if (libraryId) whereClause.libraryId = libraryId;

    if (req.query.search) {
      whereClause[Op.or] = {
        rackNumber: { [Op.like]: `%${req.query.search}%` },
        floorNumber: { [Op.like]: `%${req.query.search}%` },
        libraryId: { [Op.like]: `%${req.query.search}%` },
      };
    }

    const { count, rows: racks } = await Rack.findAndCountAll({
      where: whereClause,
      offset,
      limit: limitData,
    });

    const totalPages = Math.ceil(count / limitData);

    res.status(200).json({
      status: "Success",
      data: {
        totalData: count,
        racks,
        pagination: {
          totalPages,
          pageNum,
          limitData,
        },
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findRackById = async (req, res, next) => {
  try {
    const rack = await Rack.findByPk(req.params.id);

    if (!rack) {
      next(new ApiError(`Rack with this ID : ${req.params.id} not found`, 404));
    }

    res.status(200).json({
      status: "Success",
      data: {
        rack,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateRack = async (req, res, next) => {
  const { rackNumber, floorNumber, libraryId } = req.body;
  try {
    await Rack.update(
      {
        rackNumber,
        floorNumber,
        libraryId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const updatedRack = await Rack.findByPk(req.params.id);

    res.status(200).json({
      status: "Success",
      message: "Rack updated successful",
      updatedRack,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteRack = async (req, res, next) => {
  try {
    const rack = await Rack.findByPk(req.params.id);

    if (!rack) {
      next(new ApiError(`Rack with this ID : ${req.params.id} not found`, 404));
    }

    await Rack.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Successfully deleted rack",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const createRack = async (req, res, next) => {
  try {
    const rack = await Rack.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        rack,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findRacks,
  findRackById,
  createRack,
  updateRack,
  deleteRack,
};

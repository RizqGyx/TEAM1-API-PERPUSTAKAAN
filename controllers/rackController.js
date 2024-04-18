const { Rack } = require("../models");
const ApiError = require("../utils/apiError");

const findRacks = async (req, res, next) => {
  try {
    const racks = await Rack.findAll();

    res.status(200).json({
      status: "Success",
      data: {
        racks,
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
      message: "successfully deleted rack",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findRacks,
  findRackById,
  updateRack,
  deleteRack,
};

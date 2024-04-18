const { User } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const findUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      status: "Success",
      data: {
        users,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      next(new ApiError("User with this ID not found", 404));
    }

    res.status(200).json({
      status: "Success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findUsersByFilter = async (req, res, next) => {
  try {
    const { city, address } = req.query; 

    let whereClause = {};

    if (city) {
      whereClause.city = city;
    }

    if (address) {
      whereClause.address = address;
    }

    const users = await User.findAll({
      where: whereClause 
    });

    res.status(200).json({
      status: "Success",
      message: "Users found by city",
      data: users
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const { name, city, address, phone, role, profileImage, libraryId } =
    req.body;
  try {
    await User.update(
      {
        name,
        city,
        address,
        phone,
        role,
        profileImage,
        libraryId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "Success",
      message: "User updated successful",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};



const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      next(new ApiError("User with this ID not found", 404));
    }

    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "successfully deleted user",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findUsers,
  findUserById,
  findUsersByFilter,
  updateUser,
  deleteUser,
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const imagekit = require("../lib/imagekit");
const { Auth, User } = require("../models");
const ApiError = require("../utils/apiError");

const findAuth = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    const pageNum = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (pageNum - 1) * pageSize;

    const { count, rows: auths } = await Auth.findAndCountAll({
      offset,
      limit: pageSize,
    });

    const totalPages = Math.ceil(count / pageSize);

    res.status(200).json({
      status: "Success",
      data: {
        pagination: {
          totalData: count,
          totalPages,
          pageNum,
          pageSize,
        },
        auths,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const register = async (req, res, next) => {
  try {
    let { name, email, password, city, address, phone, role } = req.body;
    email = email.toLowerCase();

    const user = await Auth.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return next(new ApiError("User email already taken", 400));
    }

    const passwordLength = password <= 8;
    if (passwordLength) {
      next(new ApiError("Minimum password must be 8 character", 400));
    }

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    let libraryId;
    if (req.user.role === "Admin" && req.body.libraryId) {
      libraryId = req.body.libraryId;
    } else if (req.user.libraryId) {
      libraryId = req.user.libraryId;
    } else {
      return next(
        new ApiError("Admin must input libraryId in the request body", 400)
      );
    }

    const newUser = await User.create({
      name,
      address,
      city,
      phone,
      libraryId,
      role,
    });

    await Auth.create({
      email,
      password: hashedPassword,
      userId: newUser.id,
    });

    res.status(201).json({
      status: "Success",
      data: {
        email,
        newUser,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({
      where: {
        email,
      },
      include: ["User"],
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.userId,
          username: user.User.name,
          role: user.User.role,
          email: user.email,
          shopId: user.shopId,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRED,
        }
      );

      res.status(200).json({
        status: "Success",
        message: "Success login",
        data: token,
      });
    } else {
      next(new ApiError("wrong password atau user doesn't exist", 400));
    }
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const authenticate = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      data: {
        user: req.user,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = {
  register,
  login,
  authenticate,
  findAuth,
};

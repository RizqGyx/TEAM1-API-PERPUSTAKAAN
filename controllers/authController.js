const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const imagekit = require("../lib/imagekit");
const { Auth, User, Transaction } = require("../models");
const ApiError = require("../utils/apiError");

const findAuths = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    const pageNum = parseInt(page) || 1;
    const dataLimit = parseInt(limit) || 10;
    const offset = (pageNum - 1) * dataLimit;

    const { count, rows: auths } = await Auth.findAndCountAll({
      offset,
      limit: dataLimit,
    });

    const totalPages = Math.ceil(count / dataLimit);

    res.status(200).json({
      status: "Success",
      data: {
        totalData: count,
        auths,
        pagination: {
          totalPages,
          pageNum,
          dataLimit,
        },
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

    if (role != undefined || role != null) {
      role = role.toLowerCase().charAt(0).toUpperCase() + role.slice(1);
    }

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
    console.log(password);
    console.log(user.password);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.userId,
          username: user.User.name,
          role: user.User.role,
          email: user.email,
          libraryId: user.libraryId,
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
      next(new ApiError("Wrong password or user doesn't exist", 400));
    }
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const authenticate = async (req, res) => {
  try {
    const userId = req.user.id;

    const transactions = await Transaction.findAll({
      where: {
        userId: userId,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        user: req.user,
        totalTransactions: transactions.length,
        transactions,
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
  findAuths,
};

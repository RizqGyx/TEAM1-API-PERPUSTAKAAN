const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Auth, User } = require("../models");
const ApiError = require("../utils/apiError");

const registerStaff = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, age, address } = req.body;

    // validasi untuk check apakah email nya udah ada
    const user = await Auth.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return next(new ApiError("User email already taken", 400));
    }

    // minimum password length
    const passwordLength = password <= 8;
    if (passwordLength) {
      next(new ApiError("Minimum password must be 8 character", 400));
    }

    // minimum password length
    if (password !== confirmPassword) {
      next(new ApiError("password does not match", 400));
    }

    // hashing password
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const hashedConfirmPassword = bcrypt.hashSync(confirmPassword, saltRounds);

    const newUser = await User.create({
      name,
      age,
      address,
      role: "Guest",
    });
    const test = await Auth.create({
      email,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
      userId: newUser.id,
    });

    console.log(test);3

    res.status(201).json({
      status: "Success",
      data: {
        ...newUser,
        email,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const createAdmin = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, age, address } = req.body;

    // Validasi untuk check apakah email sudah ada
    const user = await Auth.findOne({ where: { email } });
    if (user) {
      return next(new ApiError("User email already taken", 400));
    }

    // Validasi panjang password
    if (password.length < 8) {
      return next(new ApiError("Minimum password must be 8 characters", 400));
    }

    // Validasi kecocokan password dan confirmPassword
    if (password !== confirmPassword) {
      return next(new ApiError("Password does not match", 400));
    }

    // Hashing password
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    // Membuat pengguna baru
    const newUser = await User.create({
      name,
      age,
      address,
      role: "admin", // Perhatikan penggunaan "admin" dengan huruf kecil
    });

    // Membuat entri autentikasi untuk pengguna baru
    const newAuth = await Auth.create({
      email,
      password: hashedPassword,
      userId: newUser.id,
      role: "admin", // Tambahkan properti role di sini
    });
    

    res.status(201).json({
      status: "Success",
      data: {
        ...newUser.toJSON(), // Gunakan toJSON() untuk mendapatkan objek JSON biasa
        email,
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
      //   token utk autentikasi
      const token = jwt.sign(
        {
          id: user.userId,
          username: user.User.name,
          role: user.User.role,
          email: user.email,
        },
        process.env.JWT_SECRET
      );
      console.log(user.User.name);
      res.status(200).json({
        status: "Success",
        message: "Berhasil login",
        data: token,
      });
    } else {
      next(new ApiError("wrong password atau user gak ada", 400));
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
  registerStaff,
  createAdmin,
  login,
  authenticate,
};

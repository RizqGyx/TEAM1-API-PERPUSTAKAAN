const ApiError = require("../utils/apiError");

const checkRole = (...roles) => {
  return async (req, res, next) => {
    try {
      // Periksa apakah peran pengguna ada dan ada di antara daftar peran yang diizinkan
      if (!req.user || !roles.includes(req.user.role)) {
        next(new ApiError(`Kamu tidak memiliki akses untuk ini`, 401));
        return;
      }
      // Lanjutkan jika peran pengguna sesuai dengan salah satu dari peran yang diizinkan
      next();
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};

module.exports = checkRole;

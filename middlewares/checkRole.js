const ApiError = require("../utils/apiError");

const checkRole = (...roles) => {
  return async (req, res, next) => {
    try {
      if (!req.user || !req.user.role || !roles.includes(req.user.role.toLowerCase())) {
        return next(new ApiError("Kamu bukan Admin/staff, jadi tidak bisa akses", 403));
      }
      next();
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};


module.exports = checkRole;

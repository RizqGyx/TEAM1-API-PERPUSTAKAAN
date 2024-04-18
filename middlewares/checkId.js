const ApiError = require("../utils/apiError");
const { User } = require("../models");

const checkId = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return next(new ApiError("User not found", 404));
    }

    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = checkId;

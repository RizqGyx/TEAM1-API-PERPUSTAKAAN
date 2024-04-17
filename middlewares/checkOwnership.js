const ApiError = require("../utils/apiError");

const checkOwnership = (req, res, next) => {
  if (req.user.shopId != req.params.id)
    return next(new ApiError("Not Part Of This Library", 401));

  next();
};

module.exports = checkOwnership;

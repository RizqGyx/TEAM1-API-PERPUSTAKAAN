const ApiError = require("../utils/apiError");
const { Library, User } = require("../models");

const checkOwnership = async (req, res, next) => {


  const library = await Library.findByPk(req.params.id);

  if (!library || (library.userId && library.userId !== req.user.id)) {
    return next(new ApiError("You don't have access", 401));
  }
  next();
};

module.exports = checkOwnership;

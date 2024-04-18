const ApiError = require("../utils/apiError");
const { Library } = require("../models");

const checkId = async (req, res, next) => {
  try {
    const library = await Library.findByPk(req.params.id);

    if (!library) {
      return next(new ApiError(`Library Not Found`, 404));
    }

    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = checkId;

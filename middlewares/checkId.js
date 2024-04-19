const ApiError = require("../utils/apiError");
const { Library, User } = require("../models");

const checkId = async (req, res, next, resource) => {
  try {
    let entity;
    switch (resource) {
      case "library":
        entity = await Library.findByPk(req.params.id);
        if (!entity) {
          return next(new ApiError(`Library does not exist`, 404));
        }
        break;
      case "user":
        entity = await User.findByPk(req.params.id);
        if (!entity) {
          return next(new ApiError(`User not found`, 404));
        }
        break;
      default:
        return next(new ApiError(`Invalid resource type`, 400));
    }

    req.entity = entity;
    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = checkId;

const ApiError = require("../utils/apiError");

const checkOwnership = (req, res, next) => {
  //   console.log(req.user.role);
  console.log(req.user.borrowId);
  console.log(req.user.borrowIdId !== req.params.id);

  if (req.user.borrowId != req.params.id) return next(new ApiError("Kamu bukan bagian dari Staff Perpsutakaan ini", 401));

  next();
};
module.exports = checkOwnership;

const ApiError = require("../utils/apiError");

const checkDateFields = (req, res, next) => {
  const { borrowDate, returnDate } = req.body;

  // Periksa jika borrowDate atau returnDate ada dalam req.body dan tidak boleh diubah
  if (borrowDate !== undefined || returnDate !== undefined) {
    return res.status(400).json({
      status: "Error",
      message: "Borrow date and return date cannot be modified",
    });
  }

  next();
};

module.exports = checkDateFields;

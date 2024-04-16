const { Transaction } = require("../models");
const ApiError = require("../utils/apiError");
const { Op } = require("sequelize");

const findTransactions = async (req, res, next) => {
  try {
    const {
      bookId,
      memberId,
      staffId,
      libraryId,
      borrowDate,
      returnDate,
      status,
      page,
      limit,
    } = req.query;

    const pageNum = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (pageNum - 1) * pageSize;

    const transactions = await Transaction.findAll();

    res.status(200).json({
      status: "Success",
      data: {
        transactions,
        pagination: {
          totalData: totalCount,
          totalPages,
          pageNum,
          pageSize,
        },
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findTransactions,
};

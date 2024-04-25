const { Transaction } = require("../models");
const ApiError = require("../utils/apiError");
const { Op } = require("sequelize");

const createTransaction = async (req, res, next) => {
  try {
    const currentDate = new Date();
    const returnDate = new Date(currentDate);
    returnDate.setDate(returnDate.getDate() + 3);

    const capitalized =
      req.body.status.charAt(0).toUpperCase() + req.body.status.slice(1);

    const transaction = await Transaction.create({
      ...req.body,
      borrowDate: currentDate,
      returnDate: returnDate,
      status: capitalized,
    });

    res.status(201).json({
      status: "Success",
      data: {
        transaction,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findTransactions = async (req, res, next) => {
  try {
    const {
      bookId,
      userId,
      libraryId,
      borrowDate,
      returnDate,
      status,
      page,
      limit,
    } = req.query;
    const pageNum = parseInt(page) || 1;
    const limitData = parseInt(limit) || 10;
    const offset = (pageNum - 1) * limitData;

    const whereClause = {};
    if (bookId) whereClause.bookId = bookId;
    if (userId) whereClause.userId = userId;
    if (libraryId) whereClause.libraryId = libraryId;
    if (borrowDate) whereClause.borrowDate = borrowDate;
    if (returnDate) whereClause.returnDate = returnDate;
    if (status) whereClause.status = status;

    if (req.query.search) {
      whereClause[Op.or] = {
        bookId: { [Op.like]: `%${req.query.search}%` },
        userId: { [Op.like]: `%${req.query.search}%` },
        libraryId: { [Op.like]: `%${req.query.search}%` },
        borrowDate: { [Op.like]: `%${req.query.search}%` },
        returnDate: { [Op.like]: `%${req.query.search}%` },
        status: { [Op.like]: `%${req.query.search}%` },
      };
    }

    const { count, rows: transactions } = await Transaction.findAndCountAll({
      where: whereClause,
      offset,
      limit: limitData,
    });

    const totalPages = Math.ceil(count / limitData);

    res.status(200).json({
      status: "Success",
      data: {
        transactions,
        pagination: {
          totalData: count,
          totalPages,
          pageNum,
          limitData,
        },
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findTransactionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      throw new ApiError("Transaction not found", 404);
    }
    res.status(200).json({
      status: "Success",
      data: {
        transaction,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, err.statusCode || 400));
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { borrowDate, returnDate, status, ...updateData } = req.body;

    const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);

    if (borrowDate !== undefined || returnDate !== undefined) {
      throw new ApiError("Borrow date and return date cannot be modified", 400);
    }

    const [updatedRowsCount] = await Transaction.update(
      {
        ...updateData,
        status: capitalizedStatus,
      },
      {
        where: { id },
        fields: ["bookId", "memberId", "staffId", "libraryId", "status"],
      }
    );

    if (updatedRowsCount === 0) {
      throw new ApiError("Transaction not found", 404);
    }

    const updatedTransaction = await Transaction.findByPk(id);

    res.status(200).json({
      status: "Success",
      message: `Transaction with ID : ${id} updated successfully`,
      data: updatedTransaction,
    });
  } catch (err) {
    next(new ApiError(err.message, err.statusCode || 400));
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRowCount = await Transaction.destroy({
      where: { id },
    });
    if (deletedRowCount === 0) {
      throw new ApiError("Transaction not found", 404);
    }
    res.status(200).json({
      status: "Success",
      message: `Transaction with ID : ${id} deleted successfully`,
    });
  } catch (err) {
    next(new ApiError(err.message, err.statusCode || 400));
  }
};

module.exports = {
  createTransaction,
  findTransactions,
  findTransactionById,
  updateTransaction,
  deleteTransaction,
};

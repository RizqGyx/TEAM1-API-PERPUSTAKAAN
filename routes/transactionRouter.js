const router = require("express").Router();
const { Transaction } = require("../models");

const Transactions = require("../controllers/transactionController");

const authenticate = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");
const checkDateFields = require("../middlewares/checkFieldTransaction");

router.get("/", authenticate, Transactions.findTransactions);
router.post(
  "/create",
  authenticate,
  checkOwnership,
  checkDateFields,
  checkRole("Admin", "Manager", "Owner", "Staff"),
  Transactions.createTransaction
);
router.get(
  "/:id",
  authenticate,
  checkId(Transaction),
  checkOwnership,
  Transactions.findTransactionById
);
router.patch(
  "/edit/:id",
  authenticate,
  checkId(Transaction),
  checkOwnership,
  checkDateFields,
  checkRole("Admin", "Manager", "Owner", "Staff"),
  Transactions.updateTransaction
);
router.delete(
  "/delete/:id",
  authenticate,
  checkId(Transaction),
  checkOwnership,
  checkRole("Admin", "Manager", "Owner", "Staff"),
  Transactions.deleteTransaction
);

module.exports = router;

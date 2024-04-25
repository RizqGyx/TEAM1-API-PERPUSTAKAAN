const router = require("express").Router();

const Transaction = require("../controllers/transactionController");

const authenticate = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");
const checkDateFields = require("../middlewares/checkFieldTransaction");

router.get("/", authenticate, Transaction.findTransactions);
router.post(
  "/create",
  authenticate,
  checkOwnership,
  checkDateFields,
  checkRole(["Admin", "Manager", "Owner", "Staff"]),
  Transaction.createTransaction
);
router.get(
  "/:id",
  authenticate,
  checkId,
  checkOwnership,
  Transaction.findTransactionById
);
router.patch(
  "/edit/:id",
  authenticate,
  checkId,
  checkOwnership,
  checkDateFields,
  checkRole(["Admin", "Manager", "Owner", "Staff"]),
  Transaction.updateTransaction
);
router.delete(
  "/delete/:id",
  authenticate,
  checkId,
  checkOwnership,
  checkRole(["Admin", "Manager", "Owner", "Staff"]),
  Transaction.deleteTransaction
);

module.exports = router;

const router = require("express").Router();

const Transaction = require("../controllers/transactionController");

const authenticate = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");
const checkDateFields = require("../middlewares/checkFieldTransaction");

router.get("/", authenticate, Transaction.findTransactions);
router.post(
  "/create",
  authenticate,
  checkOwnership,
  checkDateFields,
  checkRole(["Admin", "Manager"]),
  Transaction.createTransaction
);
router.get(
  "/:id",
  authenticate,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Transaction.findTransactionById
);
router.patch(
  "/edit/:id",
  authenticate,
  checkOwnership,
  checkDateFields,
  checkRole(["Admin", "Manager"]),
  Transaction.updateTransaction
);
router.delete(
  "/delete/:id",
  authenticate,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Transaction.deleteTransaction
);

module.exports = router;

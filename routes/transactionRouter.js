const router = require("express").Router();

const Transaction = require("../controllers/transactionController");

const authenticate = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");

router.get("/", authenticate, Transaction.findTransactions);
router.post(
  "/",
  authenticate,
  checkOwnership,
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
  "/:id",
  authenticate,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Transaction.updateTransaction
);
router.delete(
  "/:id",
  authenticate,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Transaction.deleteTransaction
);

module.exports = router;

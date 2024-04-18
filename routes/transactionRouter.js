const router = require("express").Router();

const Transaction = require("../controllers/transactionController");

const authenticate = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");

router.get("/", authenticate, Transaction.findTransactions);
router.post("/", authenticate, checkOwnership, Transaction.createTransaction);
router.get("/:id", authenticate, Transaction.findTransactionById);
router.patch(
  "/:id",
  authenticate,
  checkOwnership,
  Transaction.updateTransaction
);
router.delete(
  "/:id",
  authenticate,
  checkOwnership,
  Transaction.deleteTransaction
);

module.exports = router;

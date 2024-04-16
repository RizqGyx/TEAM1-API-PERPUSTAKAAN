const router = require("express").Router();

const Transaction = require("../controllers/transactionController");

const autentikasi = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");

router.get("/", authenticate, Transaction.findTransactions);
router.post("/", authenticate, Transaction.createTransaction);
router.get("/:id", autentikasi, Transaction.findTransactionById);
router.patch("/:id", Transaction.updateTransaction);
router.delete("/:id", Transaction.deleteTransaction);

module.exports = router;

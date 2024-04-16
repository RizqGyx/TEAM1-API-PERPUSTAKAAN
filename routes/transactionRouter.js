const router = require("express").Router();

const Transaction = require("../controllers/transactionController");

const autentikasi = require("../middlewares/authenticate");

router.get("/", Transaction.findTransactions);

module.exports = router;

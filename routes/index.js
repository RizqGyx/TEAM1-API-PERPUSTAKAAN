const router = require("express").Router();

const Admin = require("./adminRouter");
const Transaction = require("./transactionRouter");

router.use("/", Admin);
router.use("/api/v1/transactions", Transaction);

module.exports = router;

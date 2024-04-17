const router = require("express").Router();

// const Admin = require("./adminRouter");
const Transaction = require("./transactionRouter");
const Auth = require("./authRouter");
const User = require("./userRouter");

// router.use("/", Admin);
router.use("/api/v1/transaction", Transaction);
router.use("/api/v1/auth", Auth);
router.use("/api/v1/user", User);

module.exports = router;

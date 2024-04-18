const router = require("express").Router();

// const Admin = require("./adminRouter");
const Transaction = require("./transactionRouter");
const Auth = require("./authRouter");
const User = require("./userRouter");
const Library = require("./libraryRouter");

// router.use("/", Admin);
router.use("/api/v1/transaction", Transaction);
router.use("/api/v1/auth", Auth);
router.use("/api/v1/user", User);
router.use("/api/v1/librarys", Library);

module.exports = router;

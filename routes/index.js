const router = require("express").Router();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

router.use("/api-docs", swaggerUI.serve);
router.use("/api-docs", swaggerUI.setup(swaggerDocument));

// const Admin = require("./adminRouter");
const Transaction = require("./transactionRouter");
const Rack = require("./rackRouter");
const Auth = require("./authRouter");
const User = require("./userRouter");
const Book = require("./bookRouter");
const Library = require("./libraryRouter");

// router.use("/", Admin);
router.use("/api/v1/transaction", Transaction);
router.use("/api/v1/rack", Rack);
router.use("/api/v1/auth", Auth);
router.use("/api/v1/user", User);
router.use("/api/v1/library", Library);
router.use("/api/v1/book", Book);

module.exports = router;

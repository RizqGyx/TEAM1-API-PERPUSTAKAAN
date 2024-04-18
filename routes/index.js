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

// router.use("/", Admin);
router.use("/api/v1/transaction", Transaction);
router.use("/api/v1/rack", Rack);
router.use("/api/v1/auth", Auth);
router.use("/api/v1/user", User);

module.exports = router;

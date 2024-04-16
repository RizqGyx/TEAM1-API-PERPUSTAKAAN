
const router = require("express").Router();

const user = require("./userRouter");
const Auth = require("./authRouter");

router.use("/api/v1/users", user);
router.use("/api/v1/auth", Auth);

module.exports = router;

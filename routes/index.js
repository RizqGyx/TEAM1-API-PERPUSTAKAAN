const router = require("express").Router();

// const Admin = require("./adminRouter");

const Library = require("./libraryRouter");

// router.use("/", Admin);

router.use("/api/v1/librarys", Library);

module.exports = router;

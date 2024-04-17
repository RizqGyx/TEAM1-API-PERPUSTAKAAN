const router = require("express").Router();
const { User } = require("../models");

const Users = require("../controller/userController");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");

// router.get("/", autentikasi, Users.findUsers);
// router.get("/:id", checkId(User), autentikasi,Users.findUserById);
// router.patch("/edit/:id", checkId(User), autentikasi, Users.updateUser);
// router.delete("/delete/:id", checkId(User), autentikasi, Users.deleteUser);

// router.get("/", autentikasi,Users.findUsers);

router.get("/", autentikasi, checkRole("Admin", "Staff"), Users.findUsers);
router.get("/:id", checkId(User), autentikasi, checkRole("Admin", "Staff"),Users.findUserById);
router.patch("/edit/:id", checkId(User), autentikasi, Users.updateUser);
router.delete("/delete/:id", checkId(User), autentikasi, checkRole("Admin", "Staff"), Users.deleteUser);


module.exports = router;

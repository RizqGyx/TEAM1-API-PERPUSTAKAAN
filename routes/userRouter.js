const router = require("express").Router();
const { User } = require("../models");

const Users = require("../controllers/userController");
const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");


router.get("/", autentikasi, checkRole("Admin", "Staff"), Users.findUsers);
// router.get(
//   "/:search", 
//   autentikasi, 
//   checkRole("Admin", "Staff"),
//    Users.findUsersByFilter);
router.get(
  "/:id",
  autentikasi,
  checkRole("Admin", "Staff"),
  Users.findUserById
);
router.patch("/edit/:id", autentikasi, Users.updateUser);
router.delete(
  "/delete/:id",
  autentikasi,
  checkRole("Admin", "Staff"),
  Users.deleteUser
);

module.exports = router;

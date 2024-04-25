const router = require("express").Router();
const { User } = require("../models");

const Users = require("../controllers/userController");
const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkRole = require("../middlewares/checkRole");

router.get(
  "/",
  autentikasi,
  checkRole("Owner", "Manager", "Admin", "Staff"),
  Users.findUsers
);
router.get(
  "/:id",
  autentikasi,
  checkId(User),
  checkRole("Owner", "Manager", "Admin", "Staff"),
  Users.findUserById
);
router.patch(
  "/edit/:id",
  autentikasi,
  checkId(User),
  upload.array("images"),
  Users.updateUser
);
router.delete(
  "/delete/:id",
  autentikasi,
  checkId(User),
  checkRole("Owner", "Manager", "Admin", "Staff"),
  Users.deleteUser
);

module.exports = router;

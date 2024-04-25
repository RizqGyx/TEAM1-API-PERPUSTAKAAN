const router = require("express").Router();

const User = require("../controllers/userController");
const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkRole = require("../middlewares/checkRole");

router.get(
  "/",
  autentikasi,
  checkRole("Owner", "Manager", "Admin", "Staff"),
  User.findUsers
);
router.get(
  "/:search",
  autentikasi,
  checkRole("Owner", "Manager", "Admin", "Staff"),
  User.findUsersByFilter
);
router.get(
  "/:id",
  autentikasi,
  checkId,
  checkRole("Owner", "Manager", "Admin", "Staff"),
  User.findUserById
);
router.patch(
  "/edit/:id",
  autentikasi,
  checkId,
  upload.array("images"),
  User.updateUser
);
router.delete(
  "/delete/:id",
  autentikasi,
  checkId,
  checkRole("Owner", "Manager", "Admin", "Staff"),
  User.deleteUser
);

module.exports = router;

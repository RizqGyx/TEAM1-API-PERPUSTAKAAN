const router = require("express").Router();

const User = require("../controllers/userController");
const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.get(
  "/",
  autentikasi,
  checkRole("Manager", "Admin", "Staff"),
  User.findUsers
);
router.get(
  "/:search",
  autentikasi,
  checkRole("Manager", "Admin", "Staff"),
  User.findUsersByFilter
);
router.get(
  "/:id",
  autentikasi,
  checkRole("Manager", "Admin", "Staff"),
  User.findUserById
);
router.patch("/edit/:id", autentikasi, upload.array("images"), User.updateUser);
router.delete(
  "/delete/:id",
  autentikasi,
  checkRole("Manager", "Admin", "Staff"),
  User.deleteUser
);

module.exports = router;

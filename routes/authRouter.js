const router = require("express").Router();

const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controller/authController");
const checkRole = require("../middlewares/checkRole");

router.post("/login", Auth.login);
router.post("/staff/register", Authenticate, Auth.registerStaff);
router.post("/admin/register", Authenticate, checkRole("Admin"), Auth.createAdmin);
// router.post("/admin/register", Auth.createAdmin);
module.exports = router;

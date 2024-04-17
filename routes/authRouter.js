const router = require("express").Router();

const upload = require("../middlewares/uploader");
const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controller/authController");
const checkRole = require("../middlewares/checkRole");

router.post("/login", Auth.login);
router.post("/staff/register", Authenticate, Auth.registerStaff);
router.post("/admin/register", Authenticate, checkRole("Admin"), upload.array("imgUrl"),Auth.createAdmin);
// router.post("/admin/register", Auth.createAdmin);
module.exports = router;

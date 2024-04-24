const router = require("express").Router();

const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controllers/authController");
const validateRole = require("../middlewares/validateRoleRegister");

router.get("/", Auth.findAuths);
router.post("/register", Authenticate, validateRole, Auth.register);
router.post("/login", Auth.login);
router.get("/me", Authenticate, Auth.authenticate);

module.exports = router;

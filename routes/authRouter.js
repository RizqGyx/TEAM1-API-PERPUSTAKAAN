const router = require("express").Router();

const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controllers/authController");
const upload = require("../middlewares/uploader")

router.get("/", Auth.findAuths);
router.post("/register", Authenticate, upload.array("images"), Auth.register);
router.post("/login", Auth.login);
router.get("/me", Authenticate, Auth.authenticate);

module.exports = router;

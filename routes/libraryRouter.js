const router = require("express").Router();

const Library = require("../controllers/libraryController");
const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole")

router.get("/", Library.findLibrarys);
router.post("/", Library.createLibrary);
router.get("/:id", checkId, Library.findLibraryById);
router.patch("/:id", Library.updateLibrary);
router.delete("/:id", Library.deleteLibrary);



module.exports = router;

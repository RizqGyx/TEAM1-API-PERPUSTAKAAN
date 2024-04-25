const router = require("express").Router();

const Library = require("../controllers/libraryController");
const autentikasi = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");
const checkId = require("../middlewares/checkId");
const checkRole = require("../middlewares/checkRole");

router.get("/", autentikasi, Library.findLibrarys);
router.post("/create", autentikasi, checkRole("Owner"), Library.createLibrary);
router.get("/:id", autentikasi, checkId(Library), Library.findLibraryById);
router.patch(
  "/edit/:id",
  autentikasi,
  checkId(Library),
  checkOwnership,
  checkRole("Owner", "Manager"),
  Library.updateLibrary
);
router.delete(
  "/delete/:id",
  autentikasi,
  checkId(Library),
  checkRole("Owner"),
  Library.deleteLibrary
);

module.exports = router;

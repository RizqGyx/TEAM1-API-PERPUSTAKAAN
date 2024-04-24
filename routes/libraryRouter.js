const router = require("express").Router();

const Library = require("../controllers/libraryController");
const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");

router.get("/", autentikasi, Library.findLibrarys);
router.post(
  "/",
  autentikasi,
  checkId(Library),
  checkRole(["Admin", "Manager", "Owner"]),
  checkOwnership,
  Library.createLibrary
);
router.get(
  "/:id",
  autentikasi,
  checkId(Library),
  checkOwnership,
  Library.findLibraryById
);
router.patch(
  "/:id",
  checkId(Library),
  autentikasi,
  checkOwnership,
  checkRole(["Admin", "Manager", "Owner"]),
  Library.updateLibrary
);
router.delete(
  "/:id",
  checkId(Library),
  autentikasi,
  checkOwnership,
  checkRole(["Admin", "Manager", "Owner"]),
  Library.deleteLibrary
);

module.exports = router;

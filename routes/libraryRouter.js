const router = require("express").Router();

const Library = require("../controllers/libraryController");
const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");

router.get("/", autentikasi, Library.findLibrarys);
router.post(
  "/",
  checkId,
  autentikasi,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Library.createLibrary
);
router.get(
  "/:id",
  checkId,
  autentikasi,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Library.findLibraryById
);
router.patch(
  "/:id",
  checkId,
  autentikasi,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Library.updateLibrary
);
router.delete(
  "/:id",
  checkId,
  autentikasi,
  checkOwnership,
  checkRole(["Admin", "Manager"]),
  Library.deleteLibrary
);

module.exports = router;

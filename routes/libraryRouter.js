const router = require("express").Router();

const Library = require("../controllers/libraryController");
const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");

router.get("/", autentikasi, Library.findLibrarys);
router.post(
  "/create",
  autentikasi,
  checkRole(["Admin", "Manager"]),
  Library.createLibrary
);
router.get(
  "/:id",
  autentikasi,
  checkId,
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  Library.findLibraryById
);
router.patch(
  "/edit/:id",
  autentikasi,
  checkId,
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  Library.updateLibrary
);
router.delete(
  "/delete/:id",
  autentikasi,
  checkId,
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  Library.deleteLibrary
);

module.exports = router;

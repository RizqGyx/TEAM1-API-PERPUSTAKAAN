const router = require("express").Router();
const { Library } = require("../models");

const Libraries = require("../controllers/libraryController");
const autentikasi = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");
const checkId = require("../middlewares/checkId");
const checkRole = require("../middlewares/checkRole");

router.get("/", autentikasi, Libraries.findLibrarys);
router.post(
  "/create",
  autentikasi,
  checkRole("Owner"),
  Libraries.createLibrary
);
router.get("/:id", autentikasi, checkId(Library), Libraries.findLibraryById);
router.patch(
  "/edit/:id",
  autentikasi,
  checkId(Library),
  checkOwnership,
  checkRole("Owner", "Manager"),
  Libraries.updateLibrary
);
router.delete(
  "/delete/:id",
  autentikasi,
  checkId(Library),
  checkRole("Owner"),
  Libraries.deleteLibrary
);

module.exports = router;

const router = require("express").Router();

const Racks = require("../controllers/rackController");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");

router.get("/", autentikasi, checkRole("Admin", "Staff"), Racks.findRacks);
router.get(
  "/:id",
  autentikasi,
  checkRole("Admin", "Staff"),
  Racks.findRackById
);
router.patch(
  "/edit/:id",
  autentikasi,
  checkRole("Admin", "Staff"),
  Racks.updateRack
);
router.delete(
  "/delete/:id",
  autentikasi,
  checkRole("Admin", "Staff"),
  Racks.deleteRack
);

module.exports = router;

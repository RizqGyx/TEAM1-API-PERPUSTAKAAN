const router = require("express").Router();

const Racks = require("../controllers/rackController");
const checkOwnership = require("../middlewares/checkOwnership");
const checkId = require("../middlewares/checkId");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.get(
  "/",
  autentikasi,
  checkRole("Owner", "Admin", "Manager", "Staff"),
  Racks.findRacks
);
router.get(
  "/:id",
  autentikasi,
  checkId,
  checkRole("Owner", "Admin", "Manager", "Staff"),
  Racks.findRackById
);
router.post(
  "/create",
  autentikasi,
  checkOwnership,
  checkRole(["Admin", "Manager", "Owner", "Staff"]),
  Racks.createRack
);
router.patch(
  "/edit/:id",
  autentikasi,
  checkId,
  checkOwnership,
  checkRole("Owner", "Admin", "Manager", "Staff"),
  Racks.updateRack
);
router.delete(
  "/delete/:id",
  autentikasi,
  checkId,
  checkOwnership,
  checkRole("Owner", "Admin", "Manager", "Staff"),
  Racks.deleteRack
);

module.exports = router;

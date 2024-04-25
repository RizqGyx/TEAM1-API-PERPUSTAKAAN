const router = require("express").Router();
const books = require("../controllers/booksController");
const authenticate = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const upload = require("../middlewares/uploader");
const checkId = require("../middlewares/checkId");

// Find by id
router.get("/:id", authenticate, checkId, books.findBooksById);

// Search and filter
router.get("/", authenticate, books.filterBooks);

// create data
router.post(
  "/",
  authenticate,
  checkId,
  upload.array("images"),
  checkRole(["Admin", "Manager", "Owner", "Staff"]),
  books.createNewBooks
);

// delete data
router.delete(
  "/:id",
  authenticate,
  checkId,
  checkRole(["Admin", "Manager", "Owner", "Staff"]),
  books.deleteBookById
);
// edit data
router.put(
  "/:id",
  authenticate,
  checkId,
  upload.array("images"),
  checkRole(["Admin", "Manager", "Owner", "Staff"]),
  books.updateBookData
);
// dummy
router.get("/find/books", books.findAll);

module.exports = router;

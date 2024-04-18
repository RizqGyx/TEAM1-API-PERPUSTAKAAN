const router = require("express").Router();
const books = require("../controllers/booksController");
const authenticate = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const upload = require("../middlewares/uploader");

// Find by id
router.get("/:id", 
    authenticate, 
    books.findBooksById
);
// Search and filter
router.get("/", 
    authenticate, 
    books.filterBooks
);
// create data
router.post("/", 
    authenticate,
    upload.array("images"), 
    checkRole(["Staff", "Admin"]), 
    books.createNewBooks
);
// delete data
router.delete("/:id",
    authenticate, 
    checkRole(["Staff", "Admin"]), 
    books.deleteBookById
);
// edit data
router.put("/:id", 
    authenticate, 
    checkRole(["Staff", "Admin"]), 
    upload.array("images"),
    books.updateBookData
);
// dummy
router.get("/find/books", books.findAll)

module.exports = router
const {Router} = require("express")
const BookController = require("../controller/BookController")
const checkBookExist = require("../middlewares/checkBookExist")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books", bookController.createBook)
bookRoutes.get("/books", bookController.listBooks)
bookRoutes.delete("/books/:id/done", checkBookExist, bookController.deleteBook)

module.exports = bookRoutes
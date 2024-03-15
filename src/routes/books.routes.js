const {Router} = require("express")
const BookController = require("../controller/BookController")
const checkBookExist = require("../middlewares/checkBookExist")
const checkUserExist = require("../middlewares/checkUserExist")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books", bookController.createBook)
bookRoutes.get("/books/listBooks", bookController.listBooks)
/*bookRoutes.post("/books/:id", checkBookExist, checkUserExist, bookController.loanBook)*/
/*bookRoutes.patch("/books/status/:id", checkBookExist, bookController.updateBookStatus)*/
bookRoutes.delete("/books/:id/done", checkBookExist, bookController.deleteBook)

module.exports = bookRoutes
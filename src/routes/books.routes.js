const {Router} = require("express")
const BookController = require("../controller/BookController")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books", bookController.createBook)
bookRoutes.get("/books", bookController.listBooks)

module.exports = bookRoutes
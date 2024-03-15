const {Router} = require("express")
const LoansController = require("../controller/LoansController")

const loansRoutes = Router()
const loansController =  new LoansController

loansRoutes.post("/:user_id/:book_id", loansController.borrowBooks)
loansRoutes.get("/:user_id", loansController.listBorrowedBooks)
loansRoutes.get("/total/:user_id", loansController.totalBorrowedBooks)
loansRoutes.patch("/returnBorrowedBooks/:user_id/:book_id", loansController.returnBorrowedBooks)

module.exports = loansRoutes
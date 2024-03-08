const {Router} = require("express")
const UserController = require("../controller/UserController")

const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/users", userController.createUser)
userRoutes.get("/users", userController.listUser)

module.exports = userRoutes
const {Router} = require("express")
const UserController = require("../controller/UserController")
const checkUserExist = require("../middlewares/checkUserExist")

const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/users", userController.createUser)
userRoutes.get("/users/listUser", userController.listUser)
userRoutes.get("/users/listUserById/:user_id", checkUserExist, userController.listUserById)
userRoutes.delete("/users/:user_id", checkUserExist, userController.deleteUser)

module.exports = userRoutes
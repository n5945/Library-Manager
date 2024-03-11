const knex = require("../database/knex/migrations")

class UserController {
   
async createUser(req, res) {
    const {name, email, fone} = req.body

    const books = false
    const loan = false

    await knex("users").insert({name, email, fone})

    res.status(201).json("Usuario cadastrado com sucesso.")
}

async listUser(req, res) {
    const users = await knex("users")

    res.status(200).json(users)

}

}

module.exports = UserController
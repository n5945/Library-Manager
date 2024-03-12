const knex = require("../database/knex")

class UserController {
   
async createUser(req, res) {
    const {name,  email, fone} = req.body
        
    await knex("users").insert({name, email, fone})
    
    res.status(201).json("Usuario cadastrado com sucesso.")

}

async listUser(req, res) {
    const users = await knex("users")

    res.status(200).json(users)

}

async listUserById (req, res) {
    const {user_id} = req.params

    const users = await knex("users").where({id:user_id})

    res.status(200).json(users)
} 

async deleteUser(req, res) {
    const {user_id} = req.params
    await knex("users").where({id:user_id}).delete()

    return res.status(200).json("Usuario deletado com sucesso.")
}


}

module.exports = UserController
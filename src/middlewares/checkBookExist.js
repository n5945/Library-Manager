const knex = require("../database/knex");

async function checkBookExist(req, res, next) {
    const {id} = req.params
    const user = await knex("books").where({id})

    if(user.length === 0) {
        return res.status(400).json("Livro não encontrado.")
    }
    next( )
}

module.exports = checkBookExist
const knex = require("../database/knex")

class BookController {
    
async createBook(req, res) {
        const {title, author, category, pages, publicated} = req.body
    
        await knex("books").insert({title, author, category, pages, publicated})
    
        res.status(201).json("Livro cadastrado com sucesso.")
    }

async listBooks(req, res) {
    const books = await knex("books")

    res.status(200).json(books)
}
/*
async loanBook(req, res) {
    const {user_id, book_id} = req.params

    const user = await knex("users").where({id:user_id}).first()
    const book = await knex("books").where({id:book_id}).update()

    res.status(201).json("Livro emprestado com sucesso.")
}

async updateBookStatus(req, res) {
    const {id} = req.params

        await knex("books").where({id}).update({availability: true})

        return res.status(200).json("Status do livro atualizado com sucesso.")
}
/*
async devolutionBook(req, res) {
    
}
*/
async deleteBook(req, res) {
    const {id} = req.params
    
    await knex("books").where({id}).delete

    return res.status(200).json("Deletado com sucesso.")
}


}

module.exports = BookController
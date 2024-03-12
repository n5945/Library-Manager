const knex = require("../database/knex")

class BookController {
    
async createBook(req, res) {
        const {title, author, category, pages, publicated} = req.body
    
        const availability = false
    
        await knex("books").insert({title, author, category, pages, publicated, availability})
    
        res.status(201).json("Livro cadastrado com sucesso.")
    }

async listBooks(req, res) {
    const books = await knex("books")

    res.status(200).json(books)
}

async loanBook(req, res) {

}

async updateBookStatus(req, res) {
    const {id} = req.params

        await knex("books").where({id}).update({availability: true})

        return res.status(200).json("Status do livro atualizado com sucesso.")
}

async devolutionBook(req, res) {
    
}

async deleteBook(req, res) {
    const {id} = req.params

    await knex("books").where({id}).delete

    return res.status(200).json("Deletado com sucesso.")
}


}

module.exports = BookController
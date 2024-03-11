const knex = require("../database/knex/migrations")

const BookController {

async createBook(req, res) {
    const {title, author, category, pages, publicated} = req.body

    const availability = false

    await knex("books").insert({title, author, category, pages, publicated})

    res.status(201).json("Livro cadastrado com sucesso.")
}

async listBooks(req, res) {
    const books = await knex("books")

    res.status(200).json(books)
}

}

module.exports = BookController
const express = require('express');
const routes = require('./routes');

const app = express()

app.use(express.json())
app.use(routes)

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/*
function checkExistsUserAccount(req, res, next){
    const{email} = req.headers;
    const user = users.find(user => user.email === email)

    if (!user) {
        return res.status(400).json("Usuário não encontrado") 
    }
    req.user = user
    next()
}
*/
/*app.post("/users", (req, res) => {
        const {nome, email, telefone} = req.body

        const userAlreadyExists = users.some(user => user.email === email)

        if(userAlreadyExists) {
            return res.status(400).json("Usuário já Cadastrado!")
        }

        const user = { 
            nome, 
            email,
            telefone,
            id: uuidv4(),
            created_at: new Date(),
            books: [],
            loan:0

        }
        
        users.push(user)
        res.status(201).json(user)
})

app.get("/users", (req, res) => {
    res.status(200).json(users)
})*/

/*Cadastro de livros

app.post("/bookmanager", (req, res) => {
  
  const {title, autor, category, pages, publicated, loan} = req.body

    const book = {
        id: uuidv4(),
        title,
        autor,
        category,
        pages,
        publicated,
        availability: false,
    }

    books.push(book)

    return res.status(201).json(books)
})

app.get("/bookmanager", (req, res) => {
    const {book} = req;

    return res.status(200).json(books)
})

Emprestimo de livros

app.patch("/bookmanager/:idBook/availability", checkExistsUserAccount (req, res) => {
    const {idBook} = req.params;
    const {user} = req;
    
    const book = books.find(book => book.id === idBook);

    if(user.loan <= 2){
        if(book.availability === true){
            return res.status(200).json("Livro emprestado.");
        }
        user.loan++;
        user.books.push(book);
        book.availability = true;
        return res.status(200).json("Obrigado por emprestar esse livro!");
    }
    else{
        return res.status(400).json("Voce emprestou a quantidade maxima de livros!")
    }
})

Devolução de livros

app.patch("/bookmanager/:idBook/availability", checkExistsUserAccount (req, res) => {
    const :{idBook} = req.params,
    const :{user} = req,
    
    const :book = books.find(book => book.id === idBook),
    if(user.loan == 0){
        return res.status(400).json("Voce não tem livros para devolver.")
    }
    user.loan--;
    book.availability = false;
    user.books.splice(book);

    return res.status(200).json("Livro devolvido com sucesso!")
})

Consulta de livros

app.get("/books/consult", (req, res) => {
    const {title, author, category} = req.query;

    if(title){
        result = books.filter(book => book.title.includes(title));
    }
    if(author){
        result = books.filter(book => book.title.includes(author));
    }
    if(category){
        result = books.filter(book => book.title.includes(category));
    }

    return res.status(200).json(result);
})

/*Servidor*/

app.use((err, rep, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo deu errado!")
})

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
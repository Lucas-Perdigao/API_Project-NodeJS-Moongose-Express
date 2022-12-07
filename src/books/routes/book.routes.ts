import express from "express"
import { book } from "../factories/book.factory"

const bookRoutes = express.Router()

bookRoutes.get("/books", book.getAll.bind(book))
bookRoutes.get("/books/:author", book.getAll.bind(book))
bookRoutes.get("/books/:id", book.getById.bind(book))
bookRoutes.post("/books", book.create.bind(book))
bookRoutes.put("/books:id", book.update.bind(book))

export default bookRoutes
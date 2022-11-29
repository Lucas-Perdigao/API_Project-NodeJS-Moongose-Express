import { BookController } from "../controllers/book.controller";
import { BookModel } from "../models/book.model";
import { BookRepository } from "../repository/book.repository";
import { BookService } from "../services/book.service"

export function bookFactory(){
    const booksRepository = new BookRepository(BookModel)
    const booksService = new BookService(booksRepository)
    const booksController = new BookController(booksService)

    return booksController
}

export const book = bookFactory()


//FAZER COM CLASSE
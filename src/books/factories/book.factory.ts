import { BookModel } from "../models/book.model";
import { BookRepository } from "../repository/book.repository";

export function bookFactory(){
    const booksRepository = new BookRepository(BookModel)

    return booksRepository
}

export const book = bookFactory()
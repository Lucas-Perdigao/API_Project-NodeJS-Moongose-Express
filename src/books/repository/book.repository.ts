import { Book } from "../models/book.model";
import { Model } from "mongoose";


export class BookRepository {
    constructor(private readonly bookModel: Model<Book>) {}

    async getAll(): Promise<Book[]>{
        const books = await this.bookModel.find()
        return books
    }

    async getById(id: string): Promise<Book>{
        const book = await this.bookModel.findById(id)

        if (book === null){
            return {} as Book
        }
        return book
    }

    async create(book: Book): Promise<Book>{
        const newBook = this.bookModel.create(book)
        return newBook
    }

    async update(id: string, book: Book): Promise<Book>{
        const updatedBook = await this.bookModel.findByIdAndUpdate(id, book, {new: true})

        if (updatedBook ===  null){
            return {} as Book
        }
        
        return updatedBook
    }
}



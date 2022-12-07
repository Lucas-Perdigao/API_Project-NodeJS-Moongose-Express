import { Book } from "../models/book.model";
import { Model } from "mongoose";


export class BookRepository {
    constructor(private readonly bookModel: Model<Book>) {}

    async getAll(author: string): Promise<Book[]>{
        if (author == null){
            const books = await this.bookModel.find().populate('review')
            return books
        }

        const books = await this.bookModel.find({author: author}).populate('review')
        return books
    }

    async getById(id: string): Promise<Book>{
        const book = await this.bookModel.findById(id).populate('review')

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
        const { status, language, reviewId } = book
        const updatedBook = await this.bookModel.findByIdAndUpdate(id, {$set: {status: status, language: language, reviewId: reviewId}}, {new: true})

        if (updatedBook ===  null){
            return {} as Book
        }
        
        return updatedBook
    }

    // async updateStatus(id: string, book: Book): Promise<Book>{
    //     const { status } = book
    //     const updatedStatus = await this.bookModel.findByIdAndUpdate(id, { $set: { status }})

    //     if (updatedStatus === null){
    //         return {} as Book
    //     }

    //     return updatedStatus
    // }
}



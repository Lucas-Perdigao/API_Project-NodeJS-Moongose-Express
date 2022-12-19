import { Book } from "../models/book.model";
import { Model } from "mongoose";


export class BookRepository {
    constructor(private readonly bookModel: Model<Book>) {}

    async getAll(): Promise<Book[]>{
        const books = await this.bookModel.find()

        if (books == null){
            return {} as Book[]
        }

        return books
    }

    async getAllByAuthor(author: string): Promise<Book[]>{
        const books = await this.bookModel.find({author})

        if (books == null){
            return {} as Book[]
        }

        return books
    }

    async getById(id: string): Promise<Book>{
        const book = await this.bookModel.findById(id).populate('reviewId')

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
        const { language, reviewId } = book
        const updatedBook = await this.bookModel.findByIdAndUpdate(id,
            {
                $set:{
                    language: language, 
                    reviewId: reviewId, 
                },
            }, 
            {
                new: true
            }
        )

        if (updatedBook ===  null){
            return {} as Book
        }
        
        return updatedBook
    }

    async updateStatus(id: string, book: Book): Promise<Book | null>{
        const { status } = book
        const updatedStatus = await this.bookModel.findByIdAndUpdate(id, { $set: { status: status }}, {new: true})

        // if (updatedStatus === null){
        //     return {} as Book
        // }

        return updatedStatus
    }
}



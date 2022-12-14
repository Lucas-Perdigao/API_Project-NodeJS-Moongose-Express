import { CustomError, invalidIdError, notFoundError, promiseError, PromiseTypeError } from "../../utils/error.handler";
import { Book } from "../models/book.model";
import { BookRepository } from "../repositories/book.repository";
import { Types } from "mongoose";

export class BookService {
    constructor(private readonly bookRepository: BookRepository) {}

    async getAll(): Promise<Book[] | CustomError> {
        try {
            const books = await this.bookRepository.getAll()
            return books
        } catch (error){
            return promiseError(error)
        }
    }
    
    async getAllByAuthor(author: string): Promise<Book[] | CustomError> {
        try {
            const books = await this.bookRepository.getAllByAuthor(author)
            return books
        } catch (error) {
            return promiseError(error)
        }
    }

    async getById(id: string): Promise<Book | CustomError> {
        if(Types.ObjectId.isValid(id) === false ){
            return invalidIdError(id)
        }

        try {
            const book = await this.bookRepository.getById(id)
            return book
        } catch (error) {
            return promiseError(error)
        }
    }

    async create(bookBody: Book): Promise<Book | CustomError>{
        try {
            const book = await this.bookRepository.create(bookBody)
            return book 
        } catch (error) {
            return promiseError(error)
        }
    }

    async update(id: string, bookBody: Book): Promise<Book | CustomError>{
        if(Types.ObjectId.isValid(id) === false ){
            return invalidIdError(id)
        }
        
        try {
            const book = await this.bookRepository.update(id, bookBody)
            return book
        } catch (error) {
            return promiseError(error)
        }
    }

    async updateStatus(id: string, bookBody: Book): Promise<Book | CustomError>{
        if(Types.ObjectId.isValid(id) === false){
            return invalidIdError(id)
        }

        try {
            const book = await this.bookRepository.updateStatus(id, bookBody)
            if(!book){
                return notFoundError(new Error("ID not found in the Database"))
            }
            return book
        } catch (error) {
            return promiseError(error)
        }
    }
}
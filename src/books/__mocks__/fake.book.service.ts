import { BookService } from "../services/book.service"
import { fakeBookData, updatedBook } from "./fake.book.data"

export const fakeBookService = {
    getAll: () => Promise.resolve(fakeBookData),
    getAllByAuthor: () => Promise.resolve(fakeBookData[0]),
    getById: () => Promise.resolve(fakeBookData[0]),
    create: () => Promise.resolve(fakeBookData[0]),
    update: () => Promise.resolve(updatedBook),
    updateStatus: () => Promise.resolve(updatedBook)
} as unknown as BookService
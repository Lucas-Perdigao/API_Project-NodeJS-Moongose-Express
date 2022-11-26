import { fakeBookData, updatedBook } from "./fake.book.data";
import { BookRepository } from "../repository/book.repository";

export const fakeBookRepository = {
    getAll: () => Promise.resolve(fakeBookData),
    getById: () => Promise.resolve(fakeBookData[0]),
    create: () => Promise.resolve(fakeBookData[0]),
    update: () => Promise.resolve(updatedBook)
} as unknown as BookRepository
import { BookRepository } from "./book.repository";
import { jest } from "@jest/globals"
import { fakeBookModel } from "../__mocks__/fake.book.model";
import { fakeBookData, fakeId, updatedBook } from "../__mocks__/fake.book.data";

const bookRepository = new BookRepository(fakeBookModel)

describe("BookRepository", () => {
    describe("getAll", () => {
        it("should return a list of books", async () => {
            const books = await bookRepository.getAll()
            expect(books).toEqual(fakeBookData)
        })

        it("should return an empty array", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValueOnce([])
            const books = await bookRepository.getAll()
            expect(books).toEqual([])
        })
    })

    describe("getById", () => {
        it("should return a sigle book", async () => {
            const book =  await bookRepository.getById(fakeId)
            expect(book).toEqual(fakeBookData[0])
        })

        it("should return an empty object", async () => {
            jest.spyOn(fakeBookModel, "findById").mockResolvedValueOnce(null)
            const book = await bookRepository.getById(fakeId)
            expect(book).toEqual({})
        })
    })

    describe("create", () => {
        it ("should create a new book", async () => {
            const book = await bookRepository.create(fakeBookData[0])
            expect(book).toEqual(fakeBookData[0])
        })
    })

    describe("update", () => {
        it("should update a single book", async () => {
            const book = await bookRepository.update(fakeId, fakeBookData[0])
            expect(book).toEqual(updatedBook)
        })

        it("should return an empty object", async () => {
            jest.spyOn(fakeBookModel, "findByIdAndUpdate").mockResolvedValueOnce(null)
            const book = await bookRepository.update(fakeId, fakeBookData[0])
            expect(book).toEqual({})
        })
    })
})

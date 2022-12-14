import { BookRepository } from "./book.repository";
import { jest, describe, it, expect } from "@jest/globals"
import { fakeBookModel } from "../__mocks__/fake.book.model";
import { validFakeAuthorParam, fakeBookData, fakeId, updatedBook, invalidFakeAuthorParam } from "../__mocks__/fake.book.data";


const bookRepository = new BookRepository(fakeBookModel)

describe("BookRepository", () => {
    describe("getAll", () => {
        it("should return a list of books", async () => {
            // jest.spyOn(fakeBookModel, "find").mockImplementation( () => ({
            //     populate: () => Promise.resolve(fakeBookData)
            // }) as any)
            const books = await bookRepository.getAll()
            expect(books).toEqual(fakeBookData)
        })

        it("should return an empty array", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValueOnce([])
            const books = await bookRepository.getAll()
            expect(books).toEqual([])
        })
    })

    describe("getAllByAuthor", () => {
        it("should return a list of books by author", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValue([fakeBookData[0]])
            const books = await bookRepository.getAllByAuthor(validFakeAuthorParam)
            expect(books).toEqual([fakeBookData[0]])
        })

        it("should return an empty array", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValue([])
            const books = await bookRepository.getAllByAuthor(invalidFakeAuthorParam)
            expect(books).toEqual([])
        })
    })

    describe("getById", () => {
        it("should return a single book", async () => {
            // jest.spyOn(fakeBookModel, "findById").mockImplementationOnce(
            //     () => ({
            //         populate: jest.fn().mockImplementationOnce(() => {fakeBookData[0]})
            //     }) as any
            // )
            const book =  await bookRepository.getById(fakeId)
            expect(book).toEqual(fakeBookData[0])
        })

        it("should return an empty object", async () => {
            jest.spyOn(fakeBookModel, "findById").mockImplementationOnce(
                () => ({
                populate: jest.fn().mockImplementationOnce(() => null)
            }) as any
            )
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

    describe("updateStatus", () => {
        it("should update a status of a single book", async () => {
            const book = await bookRepository.updateStatus(fakeId, fakeBookData[0])
            expect(book).toEqual(updatedBook)
        })

        it("should return an empty object", async () => {
            jest.spyOn(fakeBookModel, "findByIdAndUpdate").mockResolvedValueOnce(null)
            const book = await bookRepository.updateStatus(fakeId, fakeBookData[0])
            expect(book).toEqual(null)
        })
    })
})

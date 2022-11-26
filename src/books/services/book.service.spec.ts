import { BookService } from "./book.service";
import { fakeBookRepository} from "../__mocks__/fake.book.repository"
import { describe, it, expect, jest } from "@jest/globals";
import { fakeBookData, fakeId, updatedBook } from "../__mocks__/fake.book.data";
import { invalidIdError } from "../../utils/error.handler";

const bookService = new BookService(fakeBookRepository)

describe("BookService", () => {
    describe("getAll", () => {
        it("should call BookRepository.getAll()", async () => {
            const spyGetAll = jest.spyOn(fakeBookRepository, "getAll")
            await bookService.getAll()
            expect(spyGetAll).toHaveBeenCalled()
        })

        it("should return a list of books", async () => {
            const books = await bookService.getAll()
            expect(books).toEqual(fakeBookData)
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeBookRepository, "getAll").mockRejectedValueOnce("Error")
            const getAllError = await bookService.getAll()
            expect(getAllError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })
    })

    describe("getById", () => {
        it("should call BookRepository.getById()", async () => {
            const spyGetById = jest.spyOn(fakeBookRepository, "getById")
            await bookService.getById(fakeId)
            expect(spyGetById).toHaveBeenCalled()
        })

        it("should return a book", async () => {
            const book = await bookService.getById(fakeId)
            expect(book).toEqual(fakeBookData[0])
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeBookRepository, "getById").mockRejectedValueOnce("Error")
            const getByIdError = await bookService.getById(fakeId)
            expect(getByIdError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })

        it("should return an invalidIdError", async () => {
            const getByIdError = await bookService.getById("invalidIdExample")
            expect(getByIdError).toEqual(invalidIdError("invalidIdExample"))
        })
    })

    describe("create", () => {
        it("should call BookRepository.create()", async () => {
            const spyCreate = jest.spyOn(fakeBookRepository, "create")
            await bookService.create(fakeBookData[0])
            expect(spyCreate).toHaveBeenCalled()
        })

        it("should return a book", async () => {
            const book = await bookService.create(fakeBookData[0])
            expect(book).toEqual(fakeBookData[0])
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeBookRepository, "create").mockRejectedValueOnce("Error")
            const createError = await bookService.create(fakeBookData[0])
            expect(createError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })
    })

    describe("update", () => {
        it("should call BookRepository.update()", async () => {
            const spyUpdate = jest.spyOn(fakeBookRepository, "update")
            await bookService.update(fakeId, updatedBook)
            expect(spyUpdate).toHaveBeenCalled()
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeBookRepository, "update").mockRejectedValueOnce("Error")
            const updateError = await bookService.update(fakeId, updatedBook)
            expect(updateError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })

        it("should return an invalidIdError", async () => {
            const updateError = await bookService.update("invalidIdExample", updatedBook);
            expect(updateError).toEqual(invalidIdError("invalidIdExample"));
        })
    })
})
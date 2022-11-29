import { describe, it, expect, jest } from "@jest/globals"
import { invalidIdError, promiseError } from "../../utils/error.handler"
import { StatusCode } from "../../utils/status.code"
import { fakeBookData, fakeId } from "../__mocks__/fake.book.data"
import { mockRequest, mockResponse } from "../__mocks__/fake.book.routes"
import { fakeBookService } from "../__mocks__/fake.book.service"
import { BookController } from "./book.controller"

const bookController = new BookController(fakeBookService)
const req = mockRequest()
const res = mockResponse()

describe("BookController", () => {
    describe("getAll", () => {
        it("should return a list of books", async () => {
            await bookController.getAll(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeBookData)
        })
        
        it("should return status code 200", async () => {
            await bookController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a promiseError", async () => {
            jest.spyOn(fakeBookService, "getAll").mockImplementation(() => Promise.resolve(promiseError("error")))

            await bookController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })

    describe("getById", () => {
        it("should return a book", async () => {
            req.params.id = fakeId
            await bookController.getById(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0])
        })

        it("should return status code 200", async () => {
            req.params.id = fakeId
            await bookController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a promiseError", async () => {
            req.params.id = fakeId
            jest.spyOn(fakeBookService, "getById").mockImplementation(() => Promise.resolve(promiseError("error")))
            await bookController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })

        it("should return a invalidIdError", async () => {
            jest.spyOn(fakeBookService, "getById").mockImplementation(() => Promise.resolve(invalidIdError("id")))
            await bookController.getById(req, res)
            expect (res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST)
        })
    })

    describe("create", () => {
        it("should create a book", async () => {
            req.body = fakeBookData[0]
            await bookController.create(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0])
        })

        it("should return status code 201", async () => {
            req.body = fakeBookData[0]
            await bookController.create(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0])
        })

        it("should return a promiseError", async () => {
            req.body = fakeBookData[0]
            jest.spyOn(fakeBookService, "create").mockImplementation(() => Promise.resolve(promiseError("error")))

            await bookController.create(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })

    describe("update", () => {
        it("should return a book", async () => {
            req.params.id = fakeId
            req.body = fakeBookData[0]
            await bookController.update(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0])
        })

        it("should return status code 200", async () => {
            req.params.id = fakeId
            req.body = fakeBookData[0]
            await bookController.update(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a promiseError", async () => {
            req.params.id = fakeId
            req.body = fakeBookData[0]
            jest.spyOn(fakeBookService, "update").mockImplementation(() => Promise.resolve(promiseError("error")))
            await bookController.update(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a invalidIdError", async () => {
            req.params.id = fakeId
            req.body = fakeBookData[0]
            jest.spyOn(fakeBookService, "update").mockImplementation(() => Promise.resolve(invalidIdError("id")))
        })
    })
})
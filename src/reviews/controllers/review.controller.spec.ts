import { describe, it, expect, jest } from "@jest/globals"
import { invalidIdError, promiseError } from "../../utils/error.handler"
import { StatusCode } from "../../utils/status.code"
import { fakeReviewData, fakeId } from "../__mocks__/fake.review.data"
import { mockRequest, mockResponse } from "../__mocks__/fake.review.routes"
import { fakeReviewService } from "../__mocks__/fake.review.service"
import { ReviewController } from "./review.controller"

const reviewController = new ReviewController(fakeReviewService)
const req = mockRequest()
const res = mockResponse()

describe("ReviewController", () => {  
    describe("getAll", () => {
        it("should return a list of reviews", async () => {
            await reviewController.getAll(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData)
        })
        
        it("should return status code 200", async () => {
            await reviewController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a promiseError", async () => {
            jest.spyOn(fakeReviewService, "getAll").mockImplementation(() => Promise.resolve(promiseError("error")))

            await reviewController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })

    describe("getById", () => {
        it("should return a review", async () => {
            req.params.id = fakeId
            await reviewController.getById(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData[0])
        })

        it("should return status code 200", async () => {
            req.params.id = fakeId
            await reviewController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a promiseError", async () => {
            req.params.id = fakeId
            jest.spyOn(fakeReviewService, "getById").mockImplementation(() => Promise.resolve(promiseError("error")))
            await reviewController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })

        it("should return a invalidIdError", async () => {
            jest.spyOn(fakeReviewService, "getById").mockImplementation(() => Promise.resolve(invalidIdError("id")))
            await reviewController.getById(req, res)
            expect (res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST)
        })
    })

    describe("create", () => {
        it("should create a book", async () => {
            req.body = fakeReviewData[0]
            await reviewController.create(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData[0])
        })

        it("should return status code 201", async () => {
            req.body = fakeReviewData[0]
            await reviewController.create(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData[0])
        })

        it("should return a promiseError", async () => {
            req.body = fakeReviewData[0]
            jest.spyOn(fakeReviewService, "create").mockImplementation(() => Promise.resolve(promiseError("error")))

            await reviewController.create(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })

    describe("update", () => {
        it("should return a review", async () => {
            req.params.id = fakeId
            req.body = fakeReviewData[0]
            await reviewController.update(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData[0])
        })

        it("should return status code 200", async () => {
            req.params.id = fakeId
            req.body = fakeReviewData[0]
            await reviewController.update(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a promiseError", async () => {
            req.params.id = fakeId
            req.body = fakeReviewData[0]
            jest.spyOn(fakeReviewService, "update").mockImplementation(() => Promise.resolve(promiseError("error")))
            await reviewController.update(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a invalidIdError", async () => {
            req.params.id = fakeId
            req.body = fakeReviewData[0]
            jest.spyOn(fakeReviewService, "update").mockImplementation(() => Promise.resolve(invalidIdError("id")))
        })
    })
})
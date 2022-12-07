import { ReviewService } from "./review.service";
import { fakeReviewRepository} from "../__mocks__/fake.review.repository"
import { describe, it, expect, jest } from "@jest/globals";
import { fakeReviewData, fakeId, updatedReview } from "../__mocks__/fake.review.data";
import { invalidIdError } from "../../utils/error.handler";

const reviewService = new ReviewService(fakeReviewRepository)

describe("ReviewService", () => {
    describe("getAll", () => {
        it("should call ReviewRepository.getAll()", async () => {
            const spyGetAll = jest.spyOn(fakeReviewRepository, "getAll")
            await reviewService.getAll()
            expect(spyGetAll).toHaveBeenCalled()
        })

        it("should return a list of reviews", async () => {
            const reviews = await reviewService.getAll()
            expect(reviews).toEqual(fakeReviewData)
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeReviewRepository, "getAll").mockRejectedValueOnce("Error")
            const getAllError = await reviewService.getAll()
            expect(getAllError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })
    })

    describe("getById", () => {
        it("should call ReviewRepository.getById()", async () => {
            const spyGetById = jest.spyOn(fakeReviewRepository, "getById")
            await reviewService.getById(fakeId)
            expect(spyGetById).toHaveBeenCalled()
        })

        it("should return a review", async () => {
            const review = await reviewService.getById(fakeId)
            expect(review).toEqual(fakeReviewData[0])
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeReviewRepository, "getById").mockRejectedValueOnce("Error")
            const getByIdError = await reviewService.getById(fakeId)
            expect(getByIdError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })

        it("should return an invalidIdError", async () => {
            const getByIdError = await reviewService.getById("invalidIdExample")
            expect(getByIdError).toEqual(invalidIdError("invalidIdExample"))
        })
    })

    describe("create", () => {
        it("should call ReviewRepository.create()", async () => {
            const spyCreate = jest.spyOn(fakeReviewRepository, "create")
            await reviewService.create(fakeReviewData[0])
            expect(spyCreate).toHaveBeenCalled()
        })

        it("should return a review", async () => {
            const review = await reviewService.create(fakeReviewData[0])
            expect(review).toEqual(fakeReviewData[0])
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeReviewRepository, "create").mockRejectedValueOnce("Error")
            const createError = await reviewService.create(fakeReviewData[0])
            expect(createError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })
    })

    describe("update", () => {
        it("should call ReviewRepository.update()", async () => {
            const spyUpdate = jest.spyOn(fakeReviewRepository, "update")
            await reviewService.update(fakeId, updatedReview)
            expect(spyUpdate).toHaveBeenCalled()
        })

        it("should return an promiseError", async () => {
            jest.spyOn(fakeReviewRepository, "update").mockRejectedValueOnce("Error")
            const updateError = await reviewService.update(fakeId, updatedReview)
            expect(updateError).toEqual({
                promiseError: {
                    message: "unable to request to the Database",
                    error: "Error"
                }
            })
        })

        it("should return an invalidIdError", async () => {
            const updateError = await reviewService.update("invalidIdExample", updatedReview);
            expect(updateError).toEqual(invalidIdError("invalidIdExample"));
        })
    })
})
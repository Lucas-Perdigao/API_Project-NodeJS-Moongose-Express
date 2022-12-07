import { ReviewRepository } from "./review.repository";
import { jest, describe, it, expect } from "@jest/globals"
import { fakeReviewModel } from "../__mocks__/fake.review.model"
import { fakeReviewData, fakeId, updatedReview } from "../__mocks__/fake.review.data";

const reviewRepository = new ReviewRepository(fakeReviewModel)

describe("ReviewRepository", () => {
    describe("getAll", () => {
        it("should return a list of reviews", async () => {
            const review = await reviewRepository.getAll()
            expect(review).toEqual(fakeReviewData)
        })

        it("should return an empty array", async () => {
            jest.spyOn(fakeReviewModel, "find").mockResolvedValueOnce([])
            const reviews = await reviewRepository.getAll()
            expect(reviews).toEqual([])
        })
    })

    describe("getById", () => {
        it("should return a single review", async () => {
            const book = await reviewRepository.getById(fakeId)
            expect(book).toEqual(fakeReviewData[0])
        })
    })

    describe("create", () => {
        it ("should create a new review", async () => {
            const review = await reviewRepository.create(fakeReviewData[0])
            expect(review).toEqual(fakeReviewData[0])
        })
    })

    describe("update", () => {
        it("should update a single review", async () => {
            const review = await reviewRepository.update(fakeId, fakeReviewData[0])
            expect(review).toEqual(updatedReview)
        })

        it("should return an empty object", async () => {
            jest.spyOn(fakeReviewModel, "findByIdAndUpdate").mockResolvedValueOnce(null)
            const review = await reviewRepository.update(fakeId, fakeReviewData[0])
            expect(review).toEqual({})
        })
    })
})

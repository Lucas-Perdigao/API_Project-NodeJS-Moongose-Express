import { fakeReviewData, updatedReview } from "./fake.review.data";
import { ReviewRepository } from "../repositories/review.repository"

export const fakeReviewRepository = {
    getAll: () => Promise.resolve(fakeReviewData),
    getById: () => Promise.resolve(fakeReviewData[0]),
    create: () => Promise.resolve(fakeReviewData[0]),
    update: () => Promise.resolve(updatedReview)
} as unknown as ReviewRepository

import { ReviewService } from "../services/review.service"
import { fakeReviewData, updatedReview } from "./fake.review.data"

export const fakeReviewService = {
    getAll: () => Promise.resolve(fakeReviewData),
    getById: () => Promise.resolve(fakeReviewData[0]),
    create: () => Promise.resolve(fakeReviewData[0]),
    update: () => Promise.resolve(updatedReview)
} as unknown as ReviewService
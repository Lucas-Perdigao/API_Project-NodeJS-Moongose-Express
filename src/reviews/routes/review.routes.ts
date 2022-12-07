import express from "express"
import { review } from "../factories/review.factory"

const reviewRoutes = express.Router()

reviewRoutes.get("/books/:bookId/reviews", review.getAll.bind(review))
reviewRoutes.get("/books/:bookId/reviews/:reviewId", review.getById.bind(review))
reviewRoutes.post("/books/:bookId/reviews", review.create.bind(review))
reviewRoutes.put("/books/:bookId/reviews/:reviewId", review.update.bind(review))

export default reviewRoutes
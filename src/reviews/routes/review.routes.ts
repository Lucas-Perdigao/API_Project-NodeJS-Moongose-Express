import express from "express"
import { review } from "../factories/review.factory"

const reviewRoutes = express.Router()

reviewRoutes.get("/", review.getAll.bind(review))
reviewRoutes.get("/:id", review.getById.bind(review))
reviewRoutes.post("/", review.create.bind(review))
reviewRoutes.put("/:id", review.update.bind(review))

export default reviewRoutes
import { ReviewController } from "../controllers/review.controller";
import { ReviewModel } from "../models/review.model";
import { ReviewRepository } from "../repositories/review.repository";
import { ReviewService } from "../services/review.service"

export function reviewFactory(){
    const reviewsRepository = new ReviewRepository(ReviewModel)
    const reviewsService = new ReviewService(reviewsRepository)
    const reviewsController = new ReviewController(reviewsService)

    return reviewsController
}

export const review = reviewFactory()


//FAZER COM CLASSE
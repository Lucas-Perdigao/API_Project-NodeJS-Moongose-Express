import { Schema, model, Model, InferSchemaType } from "mongoose"

const reviewSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 24,
    },
    content: {
        type: [String],
        required: true,
        maxLength: 200
    },
    score: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: String,
        required: true,
        default: new Date().getTime()
    },
    updatedAt: {
        type: [String],
    },
})

export type Review = InferSchemaType<typeof reviewSchema>

export const ReviewModel: Model<Review> = model('Review', reviewSchema)
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
    updatedAt: {
        type: [String],
    },
}, {
    timestamps: { 
        createdAt: true, 
        updatedAt: false
    }
})

export type Review = InferSchemaType<typeof reviewSchema>

export const ReviewModel: Model<Review> = model('Review', reviewSchema)
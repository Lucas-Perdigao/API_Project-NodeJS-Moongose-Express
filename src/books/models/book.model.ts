import { Schema, model, Model, InferSchemaType } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 25
    },
    releaseDate: {
        type: String,
        maxLength: 18,
        required: true,
    },
    language: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
    },
    content: {
        type: String,
        required: true,
        maxLength: 200
    },
    reviewId: {
        type: Schema.Types.ObjectId,
        ref: 'review',
        unique: true
    },
    createdAt: {
        type: String,
        required: true,
        default: new Date().getTime()
    },
    updatedAt: {
        type: String,
    }
})

export type Book = InferSchemaType<typeof bookSchema>

export const BookModel: Model<Book> = model("Book", bookSchema);
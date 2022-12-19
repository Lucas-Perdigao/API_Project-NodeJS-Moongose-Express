import { Schema, model, Model, InferSchemaType } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 24
    },
    releaseDate: {
        type: String,
        required: true,
    },
    language: {
        type: [String],
        required: true,
        maxLength: 18
    },
    status: {
        type: Boolean,
        required: true,
    },
    author: {
        type: String,
        required: true,
        maxLength: 24,
        unique: true,
    },
    reviewId: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }
}, {
    timestamps: true
})

export type Book = InferSchemaType<typeof bookSchema>

export const BookModel: Model<Book> = model("Book", bookSchema);
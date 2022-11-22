import { Schema, model, Model, InferSchemaType } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 25
    },
    content: {
        type: String,
        required: true,
        maxLength: 200
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
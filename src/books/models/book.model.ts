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
        type: [String],
        required: true
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

// export const booksArray = [
//     {
//         title: "Memórias Póstumas de Brás Cubas",
//         releaseDate: "1881",
//         language: ["português"],
//         status: true,
//         content: "Um morto muito doido.",
//         createdAt: "1669069892027",
//         updatedAt: "1669069893000"
//     },
//     {
//         title: "Capitães da Areia",
//         releaseDate: "1937",
//         language: ["português"],
//         status: true,
//         content: "Uma turma do barulho.",
//         createdAt: "1669069894027",
//         updatedAt: "1669069895000"
//     },
//     {
//         title: "O Cortiço",
//         releaseDate: "1890",
//         language: ["português"],
//         status: true,
//         content: "Confusão ao dividir o aluguel.",
//         createdAt: "1669069896027",
//         updatedAt: "1669069897000"
//     },
// ]
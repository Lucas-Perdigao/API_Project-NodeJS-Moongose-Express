import { Schema, Types } from "mongoose";
import { Book } from "../models/book.model";

export const fakeId = "632130d41623c49bf7b1c7e9"

export const validFakeAuthorParam = "Machado de Assis"

export const invalidFakeAuthorParam = "Espada de Abreu"

export const fakeBookData: Book[] = [
    {
        title: "Memórias Póstumas de Brás Cubas",
        releaseDate: "1881",
        language: ["português", "inglês"],
        status: true,
        author: "Machado de Assis",
        reviewId: new Types.ObjectId("632130d41623c49bf7b1c7e9"),
        createdAt: "1669069892027" as unknown as NativeDate,
        updatedAt: "1669069893000" as unknown as NativeDate
    },
    {
        title: "Capitães da Areia",
        releaseDate: "1937",
        language: ["português", "espanhol"],
        status: true,
        author: "Jorge Amado",
        reviewId: new Types.ObjectId("632130d41623c49bf7b1c7e9"),
        createdAt: "1669069894027" as unknown as NativeDate,
        updatedAt: "1669069895000" as unknown as NativeDate
    },
    {
        title: "O Cortiço",
        releaseDate: "1890",
        language: ["português", "inglês", "alemão"],
        status: true,
        author: "Aluísio Azevedo",
        reviewId: new Types.ObjectId("632130d41623c49bf7b1c7e9"),
        createdAt: "1669069896027" as unknown as NativeDate,
        updatedAt: "1669069897000" as unknown as NativeDate
    },
]

export const updatedBook: Book = {
    title: "Auto da Comparecida",
    releaseDate: "1955",
    language: ["português"],
    status: true,
    reviewId: new Types.ObjectId("632130d41623c49bf7b1c7e9"),
    author: "Ariano Suassuna",
    createdAt: "1669069898027" as unknown as NativeDate,
    updatedAt: "1669069899000" as unknown as NativeDate
}
import { Book } from "../models/book.model";

export const fakeId = "632130d41623c49bf7b1c7e9"

export const fakeBookData: Book[] = [
    {
        title: "Memórias Póstumas de Brás Cubas",
        content: "Um morto muito doido.",
        createdAt: "1669069892027",
        updatedAt: "1669069893000"
    },
    {
        title: "Capitães da Areia",
        content: "Uma turma do barulho.",
        createdAt: "1669069894027",
        updatedAt: "1669069895000"
    },
    {
        title: "O Cortiço",
        content: "Confusão ao dividir o aluguel.",
        createdAt: "1669069896027",
        updatedAt: "1669069897000"
    },
]

export const updatedBook: Book = {
    title: "Auto da Comparecida",
    content: "Deus e o Diabo na Terra do Sol",
    createdAt: "1669069898027",
    updatedAt: "1669069899000"
}
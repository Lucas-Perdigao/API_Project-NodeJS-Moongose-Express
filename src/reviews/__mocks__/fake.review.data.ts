import { Review } from "../models/review.model";

export const fakeId = "632130d41623c49bf7b1c7e9"

export const fakeReviewData: Review[] = [
    {
        title: "Review de M. Póstumas",
        content: ["Aqui tá o conteúdo do review toooooodo"],
        score: 4,
        updatedAt: ["1669069893000"]
    },
    {
        title: "Review de C. da Areia",
        content: ["Aqui tá o conteúdo do review toooooodo"],
        score: 2,
        updatedAt: ["1669069895000"]
    },
    {
        title: "Review de O Cortiço",
        content: ["Aqui tá o conteúdo do review toooooodo"],
        score: 3,
        updatedAt: ["1669069897000"]
    },
]

export const updatedReview: Review = {
    title: "Auto da Comparecida",
    content: ["Aqui tá o conteúdo do review toooooodo", "Aqui tá o novo conteúdo"],
    score: 1,
    updatedAt: ["1669069899000","1669069999000"]
}
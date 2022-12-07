import { describe, it, expect } from "@jest/globals";
import { invalidBody } from "./review.body.validator";


const validTestObj = {
    body: {
        title: "Memórias Póstumas de Brás Cubas",
        score: 3,
        content: "Um morto muito doido.",
    },
}

const invalidTestObj = {
    body: {
        title: "Memórias Póstumas de Brás Cubas",
        releaseDate: true,
        language: 12312312,
        testeztez: "1669069892027",
        aaaaaaaa: {},
    },
}

describe("invalidBody", () => {
    it("should return true if body is invalid", () => {
        const isValidBody = invalidBody(invalidTestObj)
        expect(isValidBody ).toEqual(true)
    })

    it("should return false if body is valid", () => {
        const isValidBody = invalidBody(validTestObj)
        expect(isValidBody).toEqual(false)
    })
})


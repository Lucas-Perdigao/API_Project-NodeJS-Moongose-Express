import { describe, it, expect } from "@jest/globals";
import { invalidBody } from "./book.body.validator";
import { mockRequest } from "../__mocks__/fake.book.routes"

const req = mockRequest()

const validTestObj = {
    title: "Memórias Póstumas de Brás Cubas",
    releaseDate: "1881",
    language: ["português"],
    status: true,
    author: "Machado de Assis"
}

const invalidTestObj = {
    title: "Memórias Póstumas de Brás Cubas",
    releaseDate: true,
    language: 12312312,
    testeztez: "1669069892027",
    aaaaaaaa: {},
}

describe("invalidBody", () => {
    it("should return true if body is invalid", () => {
        req.body = invalidTestObj
        const isValidBody = invalidBody(req)
        expect(isValidBody).toEqual(true)
    })

    it("should return false if body is valid", () => {
        req.body = validTestObj
        const isValidBody = invalidBody(req)
        expect(isValidBody).toEqual(false)
    })
})


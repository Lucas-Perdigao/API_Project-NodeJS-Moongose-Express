import { describe, it, expect } from "@jest/globals";
import { mockInvalidRequest, mockRequest } from "../__mocks__/fake.book.routes";
import { invalidBody } from "./book.body.validator";


describe("invalidBody", () => {
    it("should return true", () => {
        const book = invalidBody(mockRequest())
        expect(book).toEqual(true)
    })


    it("should return false", () => {
            const book = invalidBody(mockInvalidRequest())
            expect(book).toEqual(false)
    })
})

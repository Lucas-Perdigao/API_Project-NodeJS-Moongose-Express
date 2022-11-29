import { BookModel } from "./book.model"
import { describe, it, expect } from "@jest/globals"

describe('BookModel', () => {
    it('should exist or be defined', () => {
        expect(BookModel).toBeDefined()
    })
})
import { describe, it, expect } from "@jest/globals";
import { bookFactory } from "./book.factory";

describe("UserFactory", () => {
    it("should define a new Book instance", () => {
        expect(bookFactory()).toBeDefined()
    })
})

import { describe, it, expect } from "@jest/globals";
import { reviewFactory } from "./review.factory";

describe("UserFactory", () => {
    it("should define a new Review instance", () => {
        expect(reviewFactory()).toBeDefined()
    })
})

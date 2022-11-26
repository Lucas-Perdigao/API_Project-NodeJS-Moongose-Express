import { promiseError, invalidIdError } from "./error.handler";
import { describe, it, expect } from "@jest/globals";

describe("error.handler", () => {
    describe("promiseError", () => {
        it("should be defined", async () => {
            const error = promiseError("error")
            expect(error).toBeDefined()
        })

        it("should return an object with a promiseError property", () => {
            const error = promiseError("error")
            expect(error.promiseError).toBeDefined()
        })

        it("should return an object with a promiseError with a message property", () => {
            const error = promiseError("error")
            expect(error).toEqual({
                promiseError: {
                    message: "unable to request to Database",
                    error: "error"
                }
            })
        })
    })
})

describe("invalidIdError", () => {
    it("should be defined", () => {
        const error = invalidIdError("invalidId")
        expect(error).toBeDefined()
    })

    it("should return an object with a invalidIdError property", () => {
        const error =  invalidIdError("invalidId")
        expect(error.invalidIdError).toBeDefined()
    })

    it("should return an object with a invalidIdError property with a message property", () => {
        const error = invalidIdError("invalidId")
        expect(error).toEqual({
            promiseError: {
                message: "invalid ID on request, please submit a object ID",
                id: "invalidId"
            }
        })
    })
})
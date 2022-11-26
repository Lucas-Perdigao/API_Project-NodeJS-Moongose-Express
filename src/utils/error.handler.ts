export type PromiseTypeError = {
    promiseError: {
        message: string,
        error: unknown
    }
}

export type InvalidIdError = {
    invalidIdError: {
        message: string,
        id: string
    }
}

export type InvalidBodyError = {
    invalidBodyError: {
        message: string,
        body: unknown,
    }
}

export type CustomError = PromiseTypeError | InvalidIdError

export function promiseError(error: unknown): PromiseTypeError {
    return {
        promiseError: {
            message: "unable to request the Database",
            error: error,
        }
    }
}

export function invalidIdError(id: string): InvalidIdError {
    return {
        invalidIdError: {
            message: "invalid ID on request, please submit a object ID",
            id: id
        }
    }
}

export function invalidBodyError(body: unknown): InvalidBodyError {
    return {
        invalidBodyError: {
            message: "Body is no valid",
            body: body  
        }
    }
}
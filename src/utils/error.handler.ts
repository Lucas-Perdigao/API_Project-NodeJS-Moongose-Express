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

export type NotFoundError = {
    notFoundError: {
        message: string,
        error: unknown
    }
}

export type CustomError = PromiseTypeError | InvalidIdError | NotFoundError

export function notFoundError(error: unknown): NotFoundError{
    return {
        notFoundError: {
            message: "Id not found in the Database",
            error: error
        }
    }
}

export function promiseError(error: unknown): PromiseTypeError {
    return {
        promiseError: {
            message: "unable to request to the Database",
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
            message: "Body is not valid",
            body: body  
        }
    }
}
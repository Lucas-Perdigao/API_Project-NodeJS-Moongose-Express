import { Request } from "express";

export function invalidBody(req: Request) {
    const book = {
        title: req.body.title,
        releaseDate: req.body.releaseDate,
        language: req.body.language,
        status: req.body.status,
        author: req.body.author
    }

    const jsonBook = JSON.stringify(book)
    const jsonBody = JSON.stringify(req.body)

    if (jsonBook !== jsonBody) {
        return true
    }

    return false
}
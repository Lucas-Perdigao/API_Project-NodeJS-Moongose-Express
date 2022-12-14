import { BookService } from "../services/book.service"
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { invalidBody } from "../utils/book.body.validator";
import { invalidBodyError } from "../../utils/error.handler";
import { isAuthor } from "../utils/book.author.validator"

export class BookController {
    constructor(private readonly bookService: BookService) {}

    async getAll(req: Request, res: Response) {
        const author = req.query.author

        // if(!isAuthor(author)){

        // }

        if(author){
            const result = await this.bookService.getAllByAuthor(author as string)
            return res.status(StatusCode.OK).json(result)
        }

        const result = await this.bookService.getAll()

        if("promiseError" in result){
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result)
        }

        return res.status(StatusCode.OK).json(result)
    }

    async getById(req: Request, res: Response) {
        const id = req.params.id
        const result = await this.bookService.getById(id)

        if("invalidIdError" in result) {
            return res.status(StatusCode.BAD_REQUEST).json(result)
        }

        if("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result)
        }

        return res.status(StatusCode.OK).json(result)
    }

    async create(req: Request, res: Response) {
        console.log("teste:", req.body)
        if (invalidBody(req)){
            return res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body))
        }

        const {body} = req
        const result =  await this.bookService.create(body)

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result)
        }

        return res.status(StatusCode.CREATED).json(result)
    }

    async update(req: Request, res: Response){
        if (invalidBody(req)){
            return res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body))
        }

        const { id } = req.params
        const { body } = req

        const result = await this.bookService.update(id, body)

        if("promiseError" in result){
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result)
        }

        if("invalidIdError" in result){
            return res.status(StatusCode.BAD_REQUEST).json(result)
        }

        return res.status(StatusCode.OK).json(result)
    }

    async updateStatus(req: Request, res: Response){
        if (invalidBody(req)){
            return res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body))
        }

        const { id } = req.params
        const { body } = req

        const result = await this.bookService.updateStatus(id, body)

        if("promiseError" in result){
            return res.status(StatusCode.BAD_REQUEST).json(result)
        }

        if("invalidIdError" in result){
            return res.status(StatusCode.BAD_REQUEST).json(result)
        }

        if("notFoundError" in result){
            return res.status(StatusCode.BAD_REQUEST).json(result)
        }

        return res.status(StatusCode.OK).json(result)
    }

}
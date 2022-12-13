import { Model } from "mongoose";
import { Book } from "../models/book.model";
import { fakeBookData, updatedBook} from "./fake.book.data";

export const fakeBookModel = {
    find: () => Promise.resolve(fakeBookData),
    findById: jest.fn().mockImplementation(()=> (
        {
            populate: jest.fn().mockImplementation(()=> fakeBookData[0])
        }
    )),
    create: () => Promise.resolve(fakeBookData[0]),
    findByIdAndUpdate: () => Promise.resolve(updatedBook)
} as unknown as Model<Book>
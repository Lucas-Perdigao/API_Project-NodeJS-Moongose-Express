import { Model } from "mongoose";
import { Book } from "../models/book.model";
import { fakeBookData, invalidFakeAuthorParam, updatedBook, validFakeAuthorParam } from "./fake.book.data";

export const fakeBookModel = {
    // find: (param?: string) => {
    //     if(param === validFakeAuthorParam){
    //         return {
    //             populate: () => Promise.resolve(fakeBookData[0])
    //         }
    //     } else if (param === invalidFakeAuthorParam){
    //         return {
    //             populate: () => Promise.resolve([])
    //         }
    //     } else {
    //         return {
    //             populate: () => Promise.resolve(fakeBookData)
    //         }
    //     }
    // },
    find: () => Promise.resolve(fakeBookData),
    findById: () => Promise.resolve(fakeBookData[0]),
    create: () => Promise.resolve(fakeBookData[0]),
    findByIdAndUpdate: () => Promise.resolve(updatedBook)
} as unknown as Model<Book>
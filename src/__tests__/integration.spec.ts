import express from "express";
import bookRoutes from "../books/routes/book.routes";
import reviewRoutes from "../reviews/routes/review.routes"
import { mongoConnect, mongoDisconnect } from "../db/mongo.connection"
import supertest from "supertest"
import {faker} from "@faker-js/faker"

const app = express();
app.use(express.json());
app.use("/books", bookRoutes);
app.use("/reviews", reviewRoutes);


const testBook = {
    title: faker.lorem.words(3),
    releaseDate: "1670847835596",
    language: [
        "português",
        "alemão"
    ],
    status: true,
    author: faker.name.firstName()
}

const testReview = {
    title: faker.lorem.words(3),
    content: faker.lorem.paragraphs(3),
    score: 1,
}
const testReviewUpdate = {
    title: faker.lorem.words(3),
    content: faker.lorem.paragraphs(3),
    score: 3,
};

const testBookChangeStatus = {
    status: false,
}

beforeAll(() => {
    mongoConnect();
});


describe("Books", () => {
    it("Should get all users", async () => {
        const response = await supertest(app).get("/books")
        expect(response.status).toBe(200)
    })

    it("Should get a book by id", async () => {
        const getAll  = await supertest(app).get("/books")
        const id = getAll.body[0]._id
        const response = await supertest(app).get(`/books/${id}`)
        expect(response.status).toBe(200)
    })
    
    it("Should create a new book", async () => {
        const response = await supertest(app).post("/books").send(testBook)
        expect(response.status).toBe(201)
    })

    it("Should update a book", async () => {
        const getAll  = await supertest(app).get("/books")
        const lastBook = getAll.body[getAll.body.length - 1];
        const id = lastBook._id;
        const response = await supertest(app).put(`/books/${id}`).send(testBook)
        expect(response.status).toBe(200)
    })
    
    it("Should update a book status", async () => {
        const getAll  = await supertest(app).get("/books")
        const lastBook = getAll.body[getAll.body.length - 1];
        const id = lastBook._id;
        const response = await supertest(app).put(`/books/${id}/status`).send(testBookChangeStatus)
        expect(response.status).toBe(200)
    })
})

describe("Reviews", () => {
    it("Should get all reviews", async () => {
        const response = await supertest(app).get("/reviews")
        expect(response.status).toBe(200)
    })

    it("Should get a review by id", async () => {
        const getAll  = await supertest(app).get("/reviews")
        const id = getAll.body[0]._id
        const response = await supertest(app).get(`/reviews/${id}`)
        expect(response.status).toBe(200)
    })

    it("Should create a new review", async () => {
        const response = await supertest(app).post("/reviews").send(testReview)
        expect(response.status).toBe(201)
    })

    it("Should update a review", async () => {
        const getAll  = await supertest(app).get("/reviews")
        const lastReview= getAll.body[getAll.body.length - 1];
        const id = lastReview._id;
        const response = await supertest(app).put(`/reviews/${id}`).send(testReviewUpdate)
        expect(response.status).toBe(200)
    })
})

afterAll(() => {
    mongoDisconnect();
});
import { ReviewModel } from "../reviews/models/review.model";
import { BookModel } from "../books/models/book.model";
import { faker } from "@faker-js/faker";
import { mongoConnect, mongoDisconnect } from "./mongo.connection";

const bookSeeder = (id: any) =>  {
    return {
        title: faker.lorem.words(3),
        releaseDate: "1670847835596",
        language: [
            "português",
            "alemão"
        ],
        status: true,
        author: faker.name.firstName(),
        reviewId: id
    }
}

const reviewSeeder = {
    title: faker.lorem.words(3),
    content: faker.lorem.paragraphs(3),
    score: 1
}


export async function seeder() {
    try {
        await ReviewModel.create(reviewSeeder) 
        console.log("DB successfully seeded");
        console.log("Review adicionados ao banco de dados");

    } catch (error) {
        console.log(`failed to seeder Reviews`);
        console.log(error);
    } 

    const reviews = await ReviewModel.find()
    const reviewIdObj = reviews[reviews.length - 1]

    try{
        const book = bookSeeder(reviewIdObj._id)
        await BookModel.create(book);
        console.log(`Book adicionados ao banco de dados`)
    } catch(error){
        console.log(`failed to seeder Books`);
        console.log(error);
    }
}

( async () => {
    mongoConnect()
    await seeder()
    mongoDisconnect()
} )()
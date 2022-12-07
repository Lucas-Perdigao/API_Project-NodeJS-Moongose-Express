import express from "express";
import { mongoConnect } from "./db/mongo.connection";
import booksRoutes from "./books/routes/book.routes";

mongoConnect();
const app = express();
app.use(express.json());
app.use("/books", booksRoutes);
app.listen(3000, () => console.log("Server is running on port 3000"));
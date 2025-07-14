const express = require("express");
const Joi = require("joi");
const books = require("./routes/books");

const app = express();

// middleware
app.use(express.json());
app.use("/api/books", books);

// server create
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port} ....`));

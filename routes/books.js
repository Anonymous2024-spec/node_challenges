const express = require("express");
const route = express.Router;

const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    year: 1999,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
  },
  {
    id: 3,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    year: 2015,
  },
  {
    id: 4,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    year: 2009,
  },
  {
    id: 5,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
  },
];

// Restful APIs
route.get("/", (req, res) => {
  res.send("Hello, these are my apis");
});

// get all books
route.get("/", (req, res) => {
  res.send(books);
});

// get one book
route.get("/:id", (req, res) => {
  const oneBook = books.find((b) => b.id === parseInt(req.params.id));
  if (oneBook) res.send(oneBook);
  return res.status(404).send("Id not found");
});

// post a book
route.post("/", (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  };
  books.push(book);
  res.send(book);
});

// delete a book
route.delete("/:id", (req, res) => {
  const oneBook = books.find((b) => b.id === parseInt(req.params.id));
  if (oneBook) {
    res.send(oneBook);
  } else {
    return res.status(404).send("Id not found");
  }
});

// update a book
route.put("/:id", (req, res) => {
  const oneBook = books.find((b) => b.id === parseInt(req.params.id));
  if (!oneBook) return res.status(404).send("Id not sent");

  const { error } = validateFields(req.body);
  if (error) return res.send(404).send("All fields are required");

  // update book
  oneBook.title = req.body.title;
  oneBook.author = req.body.author;
  oneBook.year = req.body.year;
  res.send(oneBook);
});

// function validate
function validateFields(book) {
  const schema = {
    title: Joi.String().min(3).required,
    author: Joi.String().min(3).required,
    year: Joi.Integer().min(4).required,
  };
  return Joi.validateFields(book, schema);
}

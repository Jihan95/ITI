const express = require("express");
const bookUtils = require("./services/bookStore");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
var path=require('path');    
app.use(express.static(path.join(__dirname,'public')));
app.use("/images", express.static("./images"));

app.get("/", (req, res) => {
  res.send("hello from server!");
});

app.get("/books/", (req, res) => {
  bookUtils
    .getAllBooks()
    .then((books) => {
      res.send(books);
    })
    .catch((error) => {
      res.send({
        error: "Failed to fetch books",
        details: error.message,
      });
    });
});

app.get("/books/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);
  bookUtils
    .getBookById(id)
    .then((book) => {
      res.send(book);
    })
    .catch((error) => {
      res.send({
        error: "Failed to fetch books",
        details: error.message,
      });
    });
});

app.delete("/books/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);
  console.log(id);
  bookUtils
    .deleteBook(id)
    .then(() => {
      res.send({ message: "Book deleted successfully" });
    })
    .catch((error) => {
      res.send({
        details: error.message,
      });
    });
});

app.put("/books/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);
  const title = req.body.title;
  bookUtils
    .updateBook(id, title)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((error) => {
      res.status(500).send({
        "error message": error.message,
      });
    });
});

app.post("books/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);
  const title = req.body.title;

  if (!title) {
    return res.status(400).send({ error: "Title is required" });
  }

  bookUtils
    .addBook(id, title)
    .then((newBook) => {
      res.status(201).send(newBook);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
});

app.listen(3001, () => {
  console.log("Server is listening at port 3001 ...");
});

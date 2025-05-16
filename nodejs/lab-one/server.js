const { error } = require("console");
const booksUtils = require("./services//bookStore");
const http = require("http");
const PORT = 3000;

const app = http.createServer((req, res) => {
  if (req.method == "GET") {
    if (req.url == "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Hello from server!");
    } else if (req.url == "/books/") {
      booksUtils
        .getAllBooks()
        .then((books) => {
          res.writeHead(200, { "Content-type": "text/plain" });
          res.end(JSON.stringify(books));
        })
        .catch((error) => {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "Failed to fetch books",
              details: error.message,
            })
          );
        });
    } else if (req.url.startsWith("/books/")) {
      const id = req.url.split("/")[2];
      booksUtils.getBookById(id)
        .then((book) => {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(book));
        })
        .catch((error) => {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: error.message }));
        });
    }
  } else if (req.method == "DELETE" && req.url.startsWith("/books/")) {
    const id = req.url.split("/")[2];
    booksUtils
      .deleteBook(id)
      .then(() => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Book deleted successfully" }));
      })
      .catch((error) => {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      });
  } else if (req.method == "PUT" && req.url.startsWith("/books/")) {
    const bookId = req.url.split("/")[2];
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        const newTitle = parsed.bookTitle;

        if (!newTitle) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ error: "Missing bookTitle in request body" })
          );
          return;
        }

        booksUtils.updateBook(bookId, newTitle)
          .then((updatedBook) => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(updatedBook));
          })
          .catch((error) => {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: error.message }));
          });
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON in request body" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}...`);
});

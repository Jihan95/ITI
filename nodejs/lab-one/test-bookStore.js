const booksUtils = require("./services/bookStore.js");

(async () => {
  const books = await booksUtils.getAllBooks();
  console.log(`original books: ${JSON.stringify(books)}`);
  await booksUtils.addBook("4", "book4");
  console.log("books after adding book4", await booksUtils.getAllBooks());
  await booksUtils.deleteBook("4");
  console.log("books after deleting book4", await booksUtils.getAllBooks());
  await booksUtils.updateBook("2", "Updated Book Title");
  console.log("books after updating book2", await booksUtils.getAllBooks());
})();

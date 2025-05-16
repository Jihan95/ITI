const fileManager = require("../utils/filesManager");
const FILE_PATH = "./data/books.json";

async function getAllBooks() {
  return await fileManager.readJSON(FILE_PATH);
}

async function addBook(bookId, bookTitle) {
  const books = await getAllBooks();
  books.push({ id: bookId, bookTitle: bookTitle });
  fileManager.writeJSON(FILE_PATH, books);
}

async function deleteBook(bookId) {
  const books = await getAllBooks();
  const index = books.findIndex((book) => parseInt(book.id) === bookId);

  if (index === -1) {
    throw new Error("Book not found");
  }

  books.splice(index, 1);
  await fileManager.writeJSON(FILE_PATH, books);
  return true;
}

async function updateBook(bookId, newTitle) {
  const books = await getAllBooks();

  let found = false;

  const updatedBooks = books.map((book) => {
    if (parseInt(book.id) === bookId) {
      found = true;
      return { ...book, bookTitle: newTitle };
    }
    return book;
  });

  if (!found) {
    throw new Error("Book not found");
  }

  await fileManager.writeJSON(FILE_PATH, updatedBooks);
  return updatedBooks.find((book) => parseInt(book.id) === bookId);
}

async function getBookById(bookId) {
  const books = await getAllBooks();
  const reqBook = books.filter((book) => book.id == bookId);
  if (!reqBook) {
    throw new Error("Book not found");
  }
  return reqBook;
}

module.exports = {
  getAllBooks,
  addBook,
  deleteBook,
  updateBook,
  getBookById,
};

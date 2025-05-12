const fileManager = require("../utilities/filesManager");
const FILE_PATH = "./data/books.json";

console.log(fileManager);
async function getAllBooks() {
  return await fileManager.readJSON(FILE_PATH);
}

async function createBook(bookId, bookTitle) {
  const books = await getAllBooks();
  books.push({ id: bookId, bookTitle: bookTitle });
  fileManager.writeJSON(FILE_PATH, books);
}

async function deleteBook(bookId) {
  const books = await getAllBooks();
  const updatedBooks = books.filter((book) => book.id !== bookId);
  await fileManager.writeJSON(FILE_PATH, updatedBooks);
}

async function updateBook(bookId, newTitle) {
  const books = await getAllBooks();
  const updatedBooks = books.map((book) => {
    return book.id === bookId ? { ...book, bookTitle: newTitle } : book;
  });
  await fileManager.writeJSON(FILE_PATH, updatedBooks);
}

(async () => {
  await createBook("5", "book5");
  await deleteBook("1");
  await updateBook("2", "Updated Book Title");
  const books = await getAllBooks();
  console.log(books);
})();

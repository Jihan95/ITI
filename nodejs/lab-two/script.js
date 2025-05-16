const ul = document.getElementById("booksContainer");

fetch("http://localhost:3001/books/")
  .then((response) => response.json())
  .then((books) => {
    books.forEach((book) => {
      const li = document.createElement("li");
      li.innerHTML = `<p><b><i>${book.title}</i></b></p>`;
      ul.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Failed to fetch books:", error);
  });

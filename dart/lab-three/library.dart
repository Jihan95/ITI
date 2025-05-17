abstract class Book {
  int? id;
  String? title;
  String? author;
  bool _isAvailable = true;

  Book(this.id, this.title, this.author);

  void borrow();
  void returnBook(String? bookTitle);
  bool get isAvailable => _isAvailable;

  void markBorrowed() => _isAvailable = false;
  void markReturned() => _isAvailable = true;
}

class EBook extends Book {
  double? fileSize;

  EBook(id, title, author, this.fileSize) : super(id, title, author);

  @override
  void borrow() {
    if (!_isAvailable) {
      print("E-Book '$title' is already borrowed.");
      return;
    }
    print("Borrowing E-Book: $title");
    markBorrowed();
  }

  @override
  void returnBook(String? bookTitle) {
    print("Returning E-Book: $bookTitle");
    markReturned();
  }

  void downloadBook() {
    print("downloading book");
  }

}

class PrintedBook extends Book {
  PrintedBook(id, title, author) : super(id, title, author);

  @override
  void borrow() {
    if (!_isAvailable) {
      print("E-Book '$title' is already borrowed.");
      return;
    }
    print("Borrowing Printed Book: $title");
    markBorrowed();
  }

  @override
  void returnBook(String? bookTitle) {
    print("Returning Printed Book: $bookTitle");
    markReturned();
  }
}

class Library {
  List<Book> _books = [];

  String addBook(Book book) {
    _books.add(book);
    return ("Book added: ${book}");
  }

  void checkOutBook(String title) {
    for (var book in _books) {
      if (book.title == title) {
        if (book.isAvailable) {
          book.borrow();
        } else {
          print("Book '$title' is already borrowed.");
        }
        return;
      }
    }
    print("Book '$title' not found in the library.");
  }

  void returnBook(String title) {
    for (var book in _books) {
      if (book.title == title) {
        if (!book.isAvailable) {
          book.returnBook(title);
        } else {
          print("Book '$title' was not borrowed.");
        }
        return;
      }
    }
    print("Book '$title' not found in the library.");
  }
}

void main() {
  EBook ebook = EBook(1, "Digital Fortress", "Dan Brown", 2.5);
  ebook.borrow();
  ebook.downloadBook();
  ebook.returnBook(ebook.title);

  print("");

  PrintedBook printedBook = PrintedBook(2, "1984", "George Orwell");
  printedBook.borrow();
  bool available = printedBook.isAvailable;
  print("Is '1984' available? $available");
  printedBook.returnBook("1984");

  var library = Library();

  var ebook2 = EBook(1, "Digital Fortress", "Dan Brown", 2.5);
  var printedBook2 = PrintedBook(2, "1984", "George Orwell");

  library.addBook(ebook2);
  library.addBook(printedBook2);

  library.checkOutBook("1984");
  library.checkOutBook("1984"); // Already borrowed
  library.returnBook("1984");
  library.checkOutBook("1984");
}

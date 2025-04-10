Book.bookCount = 0;

function Book(title, nOfChapters, author, nOfPages, publisher, nOfCopies) {
    this.title = title;
    this.nOfChapters = nOfChapters;
    this.author = author;
    this.nOfPages = nOfPages;
    this.publisher = publisher;
    this.nOfCopies = nOfCopies;

    Book.bookCount++;
}

Book.getBookCount = function() {
    return Book.bookCount;
};

function Box(hieght, width, length, material){
    this.hieght = hieght;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = [];
}

Box.prototype.addBook = function(book) {
    this.content.push(book);
};

Box.prototype.countBooks = function() {
    return this.content.length;
};

Box.prototype.deleteBook = function (bookTitle) {
    let index = -1;

    for(let i = 0; i < this.content.length; i++) {
        if(this.content[i].title === bookTitle){
            index = i;
            break;
        }
    }

    if (index !== -1) {
        this.content.splice(index, 1); // from index = i remove one item
    } else {
        throw new Error("box doesn't contain this box!")
    }
}

var box = new Box(10, 20, 30, 'Wood'); // Creating a Box object

var book1 = new Book('JavaScript Basics', 12, 'John Doe', 200, 'TechPress', 5); // Creating a Book object
var book2 = new Book('Advanced JavaScript', 15, 'Jane Smith', 250, 'CodePress', 3); // Creating another Book object

// Add books to the box
box.addBook(book1);
box.addBook(book2);

// Display number of books in the box
console.log('Number of books in the box:', box.countBooks());

// Delete a book by title
box.deleteBook('JavaScript Basics');

// Display number of books after deletion
console.log('Number of books in the box after deletion:', box.countBooks());

// Display the number of books created (using the class method)
console.log('Number of books created:', Book.getBookCount());
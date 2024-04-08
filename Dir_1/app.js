// example.js

// Define an object representing a book
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Fiction",
    pages: 218,
    summary: "The Great Gatsby is a novel by F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.",
    displayInfo: function() {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Publication Year:", this.publicationYear);
        console.log("Genre:", this.genre);
        console.log("Number of Pages:", this.pages);
        console.log("Summary:", this.summary);
    }
};

// Display information about the book
console.log("Book Information:");
book.displayInfo();
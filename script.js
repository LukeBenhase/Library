// Dom elements
const addBookButton = document.getElementById('addBook');
const bookList = document.getElementById('list');

// author, title, number of pages, whether it’s been read
const inputField = document.getElementById('book');
const authorField = document.getElementById('author');
const pagesField = document.getElementById('pages');
const readField = document.getElementById('read');

// varables
let myLibrary = [];


// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Event listeners
function addBook (){
    // add all of the inputs into a book object
    const bookitem = new Book(inputField.value, authorField.value, pagesField.value, readField.checked);

    //const inputText = inputField.value;

    myLibrary.push(bookitem);

    // update the list of items
    updateLibrary();

    // clear the inputs

    inputField.value = "";
    authorField.value = "";
    pagesField.value = "";
    readField.checked = false;
};

function updateLibrary () {

    // resets the values
    bookList.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookContainer = document.createElement('div');
        
        bookContainer.innerHTML = `
            <p> Title: ${book.title} Author: ${book.author} Pages: ${book.pages} isRead? ${book.read}</p>
            <button onclick="readBook(${index})" id="isRead"> read </button>
            <button onclick="deleteBook(${index})" id="delete"> delete </button>
        `;

        bookList.appendChild(bookContainer);
    });

};

function readBook (index) {
    // toggles the read value
    myLibrary[index].read = !myLibrary[index].read;

    // show the new list
    updateLibrary();
};

function deleteBook (index) {
    // remove the book
    myLibrary.splice(index, 1);

    // show updated list
    updateLibrary();
};

addBookButton.onclick = addBook;

// Add some sample books to start
const temp1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const temp2 = new Book('1984', 'George Orwell', 328, true);

myLibrary.push(temp1);
myLibrary.push(temp2);
updateLibrary();



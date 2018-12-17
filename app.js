// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}




// UI CONSTRUCTOR
function UI() { }

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  // ADD TEXT
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

  list.appendChild(row);
}

// CLEAR FIELDS
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  console.log(title, author, isbn);

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);


  // ADD book to list
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();
  e.preventDefault();
})
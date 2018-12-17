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

// SHOW ALERTS
UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);
  // Timout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// CLEAR FIELDS
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
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

  // Validate
  if (title === '' || author === '' || isbn == ' ') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // ADD book to list
    ui.addBookToList(book);
  }

  console.log(ui);




  // Clear fields
  ui.clearFields();
  e.preventDefault();
})
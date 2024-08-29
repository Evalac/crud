// const bookId = 3;

function fetchBooks(params) {
  return fetch('http://localhost:3000/books').then(responce => responce.json());
}

function fetchBookById(bookId) {
  return fetch(`http://localhost:3000/books/${bookId}`).then(responce =>
    responce.json()
  );
}

fetchBooks();
fetchBookById(4);

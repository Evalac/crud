const BASE_URL = `http://localhost:3000`;

function fetchBooks(params) {
  return fetch(`${BASE_URL}/books`).then(responce => responce.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(responce => responce.json());
}

fetchBooks();
fetchBookById(1);
fetchBookById(4);

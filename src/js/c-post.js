const BASE_URL = `http://localhost:3000`;

const newBook = {
  title: 'Test',
  author: 'Me',
  genres: ['Classic', 'Romance'],
  rating: 4.9,
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newBook),
};

function fetchPostNewBook() {
  fetch(`http://localhost:3000/books`, options)
    .then(responce => responce.json())
    .then(console.log);
}

fetchPostNewBook();

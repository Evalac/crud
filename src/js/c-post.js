const BASE_URL = `http://localhost:3000`;

const newBook = {
  title: 'Test1',
  author: 'Me2',
  genres: ['Classic', 'Romance'],
  rating: 4.9,
};

function fetchPostNewBook(newBook) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  };
  fetch(`http://localhost:3000/books`, options)
    .then(responce => responce.json())
    .then(console.log);
}

fetchPostNewBook(newBook);

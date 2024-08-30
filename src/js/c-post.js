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
  return fetch(`${BASE_URL}/books`, options).then(responce => responce.json());
}

fetchPostNewBook({
  title: 'Test book for TYPEsCRIPT',
  author: 'Me',
  genres: ['TYPEsCRIPT'],
  rating: 9,
}).then(book => renderBook(book));

fetchPostNewBook({
  title: 'Test book for Angular',
  author: 'Me',
  genres: ['Angular'],
  rating: 9.2,
}).then(book => renderBook(book));

function renderBook(book) {
  console.log(book);
}

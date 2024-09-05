const BASE_URL = `http://localhost:3000`;

const divEl = document.querySelector('.js-container');

const newBook = {
  title: 'DODO',
  author: 'Me2',
  genres: ['Classic', 'Romance'],
  rating: 4.9,
};

async function fetchPostNewBook(newBook) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  };

  const responce = await fetch(`${BASE_URL}/books`, options);
  return await responce.json();
}

async function renederUiBook(data) {
  try {
    const book = await fetchPostNewBook(newBook);
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

// renederUiBook();
async function fetchBookById(bookId) {
  const responce = await fetch(`${BASE_URL}/books/${bookId}`);
  const bookByID = await responce.json();
  return bookByID;
}

async function fetchBooks(params) {
  const responce = await fetch(`${BASE_URL}/books`);
  const books = await responce.json();
  return books;
}

async function renderMarkup(bookID) {
  try {
    const book = await fetchBookById(4);
    const markup = [book]
      .map(
        ({ title, author, rating, id }) => `<h1 class="title">${title}</h1>
        <p class="parag">${author}</p>
        <p class="parag">${rating}</p>
        <p class="parag">ID: ${id}</p>
      `
      )
      .join('');
    divEl.innerHTML = markup;
  } catch (error) {
    divEl.innerHTML = `ERROR`;
  }
}

renderMarkup();

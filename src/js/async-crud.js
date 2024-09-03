const BASE_URL = `http://locsalhost:3000`;

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

renederUiBook();

setTimeout(() => {
  console.log(1212);
}, 5000);

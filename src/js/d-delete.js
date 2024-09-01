const BASE_URL = `http://localhost:3000`;

function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options).then(responce => {
    if (responce) {
      return responce.json();
    }
    throw new Error(responce.statusText);
    console.log('error');
  });
}

removeBook('10')
  .then(console.log)
  .catch(error => console.log(error));

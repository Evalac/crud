const BASE_URL = `http://localhost:3000`;
const updateIteam = {
  title: 'Test book for NODE JS',
  genres: ['NODE JS'],
};

onFetchPathc(updateIteam, `920c`).then(res => createMarkup(res));

function onFetchPathc(update, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}

function createMarkup(responce) {
  console.log(responce);
}

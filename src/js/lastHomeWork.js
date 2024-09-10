const { release } = require('process');

const axios = require('axios').default;
const BASE_URL = `https://pixabay.com/api/`;

const search = `cat`;

const options = {
  key: `45910491-7a91b10438fcd735159f6d92e`,
  q: `cat`,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

async function getSearchPixabay(evt) {
  const response = await axios.get(
    `${BASE_URL}?key=45910491-7a91b10438fcd735159f6d92e&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  return response;
}

getSearchPixabay()
  .then(function (response) {
    // обробка успішного запиту
    console.log(response);
  })
  .catch(function (error) {
    // обробка помилки
    console.log(error);
  })
  .finally(function () {
    // виконується завжди
  });

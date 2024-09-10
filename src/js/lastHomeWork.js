const axios = require('axios').default;
const BASE_URL = `https://pixabay.com/api/`;

const options = {
  key: `45910491-7a91b10438fcd735159f6d92e`,
  q: `cat`,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

fetch(
  `https://pixabay.com/api/?key=45910491-7a91b10438fcd735159f6d92e&q=yellow+flowers&image_type=photo`
)
  .then(data => data.json())
  .then(console.log);

// axios
//   .get(`${BASE_URL}`, options)
//   .then(function (response) {
//     // обробка успішного запиту
//     console.log(response);
//   })
//   .catch(function (error) {
//     // обробка помилки
//     console.log(error);
//   })
//   .finally(function () {
//     // виконується завжди
//   });

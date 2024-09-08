const BASE_URL = 'https://restcountries.com/v3.1/name';

const refs = {
  searchForm: document.querySelector('.js-search'),
  addBtn: document.querySelector('.js-add'),
  listEl: document.querySelector('.js-list'),
  formContainer: document.querySelector('.form-container'),
};

refs.addBtn.addEventListener('click', onCountryAdd);

function onCountryAdd(evt) {
  const markup = `<input type="text" name="country">`;
  refs.formContainer.insertAdjacentHTML('beforeend', markup);
}

refs.searchForm.addEventListener('submit', onSearchBtn);

function onSearchBtn(e) {
  e.preventDefault();
  //   console.dir(e.target);
  const data = new FormData(e.currentTarget);
  const arrCountry = data.getAll('country');
  const filteredCountry = arrCountry
    .filter(country => country)
    .map(country => country.replace(/ /g, ''));

  fetchCountries(filteredCountry)
    .then(async responce => {
      const capitals = responce.map(({ capital }) => capital[0]); // чому стоїть 0 це щоб брати перший елемент масиву
      const weatherService = await getWeather(capitals);
      console.log(weatherService);
    })
    .catch(e => console.log(e));
}

async function fetchCountries(arrCountry) {
  const responces = arrCountry.map(async country => {
    const responce = await fetch(`${BASE_URL}/${country}`);
    if (!responce.ok) {
      throw new Error('');
    }
    return responce.json();
  });
  const data = await Promise.allSettled(responces);
  const countryObj = data
    .filter(({ status }) => status === 'fulfilled')
    .flatMap(({ value }) => value);

  return countryObj;
}

async function getWeather(arr) {
  const BASE_URL = `http://api.weatherapi.com/v1`;
  const API_KEY = `de3d646b80f44831adc131731240809`;

  const responces = arr.map(async city => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: city,
      lang: 'uk',
    });
    const responce = await fetch(`${BASE_URL}//current.json?${params}`);
    if (!responce.ok) {
      throw new Error(responce.statusText);
    }

    return responce.json();
  });
  const data = await Promise.allSettled(responces);
  const filerdWeather = data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value.current);

  return filerdWeather;
}

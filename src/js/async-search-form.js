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

  console.log(data.getAll('country'));
}

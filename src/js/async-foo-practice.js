const BASE_URL = 'https://restcountries.com/v3.1/capital';

// async function fetchCountry(params) {
//   //nтрай кетч застовуєво у тому випадку якщо працюємо з данними в цій функціїї
//   try {
//     const responce = await fetch(`${BASE_URL}/Kyiv`);
//     if (!responce.ok) {
//       throw new Error(responce.statusText);
//     }
//     const data = await responce.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function fetchCountry(params) {
  // У випадку коли працюємо з данними за межами функціїї

  const responce = await fetch(`${BASE_URL}/Paris`);
  if (!responce.ok) {
    throw new Error(responce.statusText);
  }
  return responce.json();
}

// fetchCountry()
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// написати функцію яка буде повертати 3 столиці з масиву

async function getCapital(params) {
  // try {
  const arrCapital = ['Kyiv', 'Berslin', 'Paris'];

  const responces = arrCapital.map(async capital => {
    const res = await fetch(`${BASE_URL}/${capital}`);
    // console.log(res);
    if (!res.ok) {
      throw new Error('NOT FOUND');
      // Promise.reject('NOT FOUND');
    }

    return res.json();
  });
  const prom = await Promise.allSettled(responces);
  return prom;
  // console.log(prom);
  // } catch (error) {
  //   console.log(`ПОМИЛКА`, error);
  // }
}

getCapital()
  .then(data => {
    const resp = data
      .filter(({ status }) => status === 'fulfilled')
      .flatMap(({ value }) => value);
    console.log(resp);
  })
  .catch(e => console.log(e));

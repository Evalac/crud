// {
//   setTimeout(() => {
//     try {
//       console.log(`в середині try до myvar`);
//       myVar;
//       console.log(`після  myVar`);
//     } catch (error) {
//       console.log(error);

//       console.log(`помилка `);
//     }
//   }, 1000);

//   console.log(`після try... catch`);
// }

////////////////////////////////////////
// {
//   const valiJSON = '{"Name":"Mango","age":3}';
//   const invalidJSON = '{бекенд повернув таке чудо}';

//   try {
//     console.log(1);

//     console.log(JSON.parse(invalidJSON));
//   } catch (error) {
//     if (error.name === 'SyntaxError') {
//       console.log('Do it anything');
//     }
//     console.log(error);
//   }

//   console.log(2);
// }

///////////////////////////////////

function getFruit(name) {
  const fruiyts = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍏',
  };

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(fruiyts[name]), reject(`reject`);
    }, 500)
  );
}

function makeSmoothie() {
  getFruit('apple').then(apple => {
    getFruit('strawberry').then(strawberry => console.log(strawberry));
  });
}
// makeSmoothie();

async function makeitSoothie() {
  try {
    const kiwi = getFruit('kiwi');
    const strawberry = getFruit('strawberry');
    const apple = getFruit('apple'); // якщо ставити await перед кожним викликом функції то вони будуть виконуватись послідовно

    const fruits = await Promise.all([apple, kiwi, strawberry]);

    return fruits;
  } catch (error) {
    console.log(`Помилка` + error);
  }
}

makeitSoothie().then(data => console.log(data));

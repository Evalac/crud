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
    strawberry: 'полинця',
    kiwi: 'kiwi',
    apple: 'apl',
  };

  return Promise.resolve(fruiyts[name]);
}

getFruit('apple').then(console.log);

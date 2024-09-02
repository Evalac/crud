setTimeout(() => {
  try {
    console.log(`в середині try до myvar`);
    myVar;
    console.log(`після  myVar`);
  } catch (error) {
    console.log(error);

    console.log(`помилка `);
  }
}, 1000);

console.log(`після try... catch`);

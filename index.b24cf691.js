function e(e){const t={strawberry:"🍓",kiwi:"🥝",apple:"🍏"};return new Promise(((r,n)=>setTimeout((()=>{r(t[e]),n("reject")}),500)))}(async function(){try{const t=e("kiwi"),r=e("strawberry"),n=e("apple");return await Promise.all([n,t,r])}catch(e){console.log("Помилка"+e)}})().then((e=>console.log(e)));
//# sourceMappingURL=index.b24cf691.js.map

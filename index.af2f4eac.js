const t=document.querySelector(".js-container");!async function(n){try{const n=(await async function(t){const n=await fetch("http://localhost:3000/books");return await n.json()}()).map((({title:t,author:n,rating:a})=>`<h1 class="title">${t}</h1>\n        <p class="parag">${n}</p>\n        <p class="parag">${a}</p>\n      `)).join("");t.innerHTML=n}catch(n){t.innerHTML="ERROR"}}();
//# sourceMappingURL=index.af2f4eac.js.map

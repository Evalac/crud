const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Test",author:"Me",genres:["Classic","Romance"],rating:4.9})};fetch("http://localhost:3000/books",t).then((t=>t.json())).then(console.log);
//# sourceMappingURL=index.a1e7a247.js.map

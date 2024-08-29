!function(){var t,n;t={title:"Test1",author:"Me2",genres:["Classic","Romance"],rating:4.9},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},fetch("http://localhost:3000/books",n).then((function(t){return t.json()})).then(console.log)}();
//# sourceMappingURL=index.b0650cac.js.map

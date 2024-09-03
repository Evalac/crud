const t={title:"DODO",author:"Me2",genres:["Classic","Romance"],rating:4.9};!async function(o){try{const o=await async function(t){const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},n=await fetch("http://locsalhost:3000/books",o);return await n.json()}(t);console.log(o)}catch(t){console.log(t)}}();
//# sourceMappingURL=index.e965e51d.js.map

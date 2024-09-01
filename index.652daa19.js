(function(o,t){const e={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};return fetch(`http://localhost:3000/books/${t}`,e).then((o=>o.json()))})({title:"Test book for NODE JS",genres:["NODE JS"]},"920c").then((o=>{return t=o,void console.log(t);var t}));
//# sourceMappingURL=index.652daa19.js.map

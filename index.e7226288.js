!function(){var o,t,n;(o={title:"Test book for NODE JS",genres:["NODE JS"]},t="920c",n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},fetch("".concat("http://localhost:3000","/books/").concat(t),n).then((function(o){return o.json()}))).then((function(o){return t=o,void console.log(t);var t}))}();
//# sourceMappingURL=index.e7226288.js.map

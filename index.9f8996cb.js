var o;(o="10",fetch(`http://localhost:3000/books/${o}`,{method:"DELETE"}).then((o=>{if(o)return o.json();throw new Error(o.statusText)}))).then(console.log).catch((o=>console.log(o)));
//# sourceMappingURL=index.9f8996cb.js.map

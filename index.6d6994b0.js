(async function(o){try{const o=["Kyiv","Berlin","Paris"].map((async o=>{const t=await fetch(`https://restcountries.com/v3.1/capital/${o}`);if(!t.ok)throw new Error("NOT FOUND");return t.json()})),t=await Promise.allSettled(o);console.log(t)}catch(o){console.log("ПОМИЛКА",o)}})().then().catch((o=>console.log(o)));
//# sourceMappingURL=index.6d6994b0.js.map

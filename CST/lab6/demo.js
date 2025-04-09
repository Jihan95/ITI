console.log("1️⃣ Start");

setTimeout(function() {
    console.log("6️⃣ setTimeout 0ms");

    setTimeout(function()  {
        console.log("🔟 Nested setTimeout 0ms inside 0ms");
    }, 2);

}, 0);

setTimeout(function() {
    console.log("8️⃣ setTimeout 3ms");
}, 3);

console.log("5️⃣ End of script");

setTimeout(() => {
    console.log("🔹 setTimeout 5ms");
}, 5);
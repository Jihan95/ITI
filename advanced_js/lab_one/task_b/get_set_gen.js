let obj = {
    name: "Jihan",
    age: "10",

}

function getSetGen(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);

            obj['get' + capitalizedKey] = function() {
                return this[key];
            };

            obj['set' + capitalizedKey] = function(value) {
                this[key] = value;
            };
        }
}
}
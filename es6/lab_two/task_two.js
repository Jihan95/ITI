const myMap = new Map();

myMap.set("Alice", 85);
myMap.set("Bob", 90);
myMap.set("Charlie",78);

//retrieve bob score
console.log(myMap.get("Bob"));

//setting charlie score
myMap.set("Charlie", 88);
console.log(myMap);

//checl david existance
console.log(myMap.has("David"));

//iterating by forEach (loop over values)
myMap.forEach(elem => console.log(elem));

//iterating by for of (loop over both)
for(let value of myMap) {
    console.log(value)
}


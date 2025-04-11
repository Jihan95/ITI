let myMap = new Map();

myMap.set("USA", "331 Million");
myMap.set("India", "1380 Million");
myMap.set("China", "331 Million");

let object = Object.fromEntries(myMap);
console.log(object);

console.log(new Map(Object.entries(object)));

const keySet = new Set(myMap.keys());
console.log(keySet);

console.log([...keySet]);
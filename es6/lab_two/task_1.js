let mySet = new Set([1, 2, 3, 4, 5, 3, 2]);

// check three existance
console.log("check 3 existance => " + `${mySet.has(3)}`);

//delete two
mySet.delete(2);

console.log(mySet);
//convert set to array
let array = [...mySet];
console.log(array);

//iterating by forEach
mySet.forEach(elem => console.log(elem));

//iterating by for of
for(let value of mySet) {
    console.log(value)
}


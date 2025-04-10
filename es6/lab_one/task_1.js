let myArray = [5, 7, 2, 10, 1, 100, 250];

console.log("Ascending:", myArray.sort((a, b) => a - b));
console.log("Descending:", myArray.sort((a, b) => b - a));

console.log("Numbers greater than 50: ", myArray.filter(num => num > 50));

console.log("Max number is: ", Math.max(...myArray));
console.log("Min number is: ", Math.min(...myArray));
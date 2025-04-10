let arrayOne = [22, 9, 12, 90, 100];

let arrayTwo = [13, 21, 3, 100, 4];

let mergedArray = [...arrayOne, ...arrayTwo]

console.log("Merged array: ", mergedArray)

let uniqueArray = [...new Set(mergedArray)];
console.log("Unique merged array:", uniqueArray);

let sortedArray = [uniqueArray.sort((a, b) => a - b)];
console.log("Sorted array: ", sortedArray);
function sortArray(array) {
    return array.sort(compareNumber);
}

function compareNumber(a, b) {
    return a - b;
}

let result = sortArray([40, 1, 5, 200]);
console.log( "Array sorted Ascendingly: " + result);

console.log( "Array sorted Descendingly: " + result.reverse());

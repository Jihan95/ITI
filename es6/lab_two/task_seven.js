function getUniqueChar(text) {
    if (typeof(text) !== 'string') {
        throw new Error("invalid input");
    }
    let textArray = Array.from(text.toLowerCase());
    let charCount = {};
    for (const char of textArray) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of textArray) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    console.log("there isn't any unique value in the text");
}

console.log(getUniqueChar('abcdef'));
console.log(getUniqueChar('aabbccf'));
console.log(getUniqueChar('aabbccddeeff'));

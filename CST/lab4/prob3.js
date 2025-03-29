function largestWord (sentance) {
    let largestWord = "";
    let i = 0;
    while ( i < sentance.length) {
        let length = 0;
        let k = i;
        while(sentance[k] !== " " && k < sentance.length) {
            length++;
            k++;
        }
        if (length > largestWord.length) {
            largestWord = sentance.slice(i, i+length);
        }
        i = k + 1;
    }
    return largestWord;
}

console.log(largestWord("this is a javascript string demo"));
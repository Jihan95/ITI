function reverseCollection1() {
    return [].reverse.apply(arguments);
}

function reverseCollection2() {
    return [].reverse.call(arguments);
}
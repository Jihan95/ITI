function add(a, b) {
    if (arguments.length !== 2) {
        throw new Error("add function must have two arguments")
        
    } else if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new Error("add function only recieves numbers")
    }
    return a + b;
}

function add1() {
    let sum = 0;
    if (arguments.length <= 1) {
        throw new Error("add function must have at least two arguments");
    }
    for (let i = 0; i < arguments.length; i++) {
        if(typeof(arguments[i]) !== 'number') {
            throw new Error("add function accepts only numbers");
        }
        sum += arguments[i];
    }
    return sum;
}

console.log(add1(5, 2, 10, 3));
console.log(add1('a', 4));
function add(a, b) {
    if (arguments.length !== 2) {
        throw new Error("add function must have two arguments")
        
    }
    return a + b;
}

function add() {
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
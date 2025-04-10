function calculateOperation(operation, ...numbers) {
    if (numbers.length === 0){
        throw new Error("At least one number is required for operation");
    }

    for(n of numbers) {
        if (typeof(n) !== 'number'){
            throw new Error("Incorrect input: all arguments must be numbers.");
            return;
        }
    }

    let result = 0;

    switch(operation) {
        case "sum":
            result = numbers.reduce((acc, curr) => acc + curr, 0);
            break;
        case "subtract":
            result = numbers.reduce((acc, curr) => acc - curr);
            break;
        case "multiply":
            result = numbers.reduce((acc, curr) => acc * curr, 1);
            break;
        case "divide":
            result = numbers.reduce((acc, curr) => {
                if (curr === 0) {
                    throw new Error("Invalid input: division by zero");
                }
                return acc / curr;
            });
            break;
        default:
            throw new Error("Invalid operation.");
    }

    const resultObj = {
        operation: operation,
        numbers: numbers,
        result: result
    };

    console.log(`Result of ${operation} operation for ${numbers.join(",")} is ${result}`);

    return resultObj;
}

calculateOperation("sum", 3, 1, 6, 3);
calculateOperation("subtract", 3, 1, 6, 3);
calculateOperation("multiply", 3, 1, 6, 3);
calculateOperation("divide", 3, 1, 6, 3);


let textField = document.getElementById("Answer");

function EnterNumber(value) {
    textField.value += value;

}

function EnterOperator(value) {
    textField.value += value;
}

function EnterClear() {
    textField.value = "";
}

function EnterEqual() {
    let expression = textField.value;
    let numsOperators = expression.match(/(\d+\.?\d*|\D)/g);
    let num1, num2, result;
    while (numsOperators.includes("/") || numsOperators.includes("*")) {
        for (let i = 0; i < numsOperators.length; i++) {
            if (numsOperators[i] == "*") {
                let result = Number(numsOperators[i - 1]) * Number(numsOperators[i + 1]);
                numsOperators.splice(i - 1, 3, result.toString());
                break;
            } else if (numsOperators[i] == "/") {
                let result = Number(numsOperators[i - 1]) / Number(numsOperators[i + 1]);
                console.log(result);
                numsOperators.splice(i - 1, 3, result.toString());
                break;
            }

        }
    }

    while (numsOperators.includes("+") || numsOperators.includes("-")) {
        for (let i = 0; i < numsOperators.length; i++) {
            if (numsOperators[i] === "+") {
                let result = Number(numsOperators[i - 1]) + Number(numsOperators[i + 1]);
                console.log(result);
                numsOperators.splice(i - 1, 3, result.toString());
                break;
            } else if (numsOperators[i] === "-") {
                let result = Number(numsOperators[i - 1]) - Number(numsOperators[i + 1]);
                console.log(result);
                numsOperators.splice(i - 1, 3, result.toString());
                break;
            }
        }
    }
    textField.value = numsOperators[0];
}
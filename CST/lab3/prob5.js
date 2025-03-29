function multiplesThreeFive(begin, end) {
    let fiveMultiplies = "Number multiple of 3: ";
    let threeMultiplies = "Number multiple of 5: ";
    let fiveLength = Math.floor(end / 5 - ((begin - 1) / 5));
    let threeLength = Math.floor(end / 3 - ((begin - 1) / 3));
    let sum = 0;
    for (var i = begin; i <= end; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
        fiveMultiplies += i;
        threeMultiplies += i;
        fiveLength -= 1;
        threeLength -= 1;
        if (fiveLength !== 0 && threeLength !== 0) {
            fiveMultiplies += ", "
            threeMultiplies += ", "
        }
        sum += i;
        }
        else if (i % 5 === 0) {
            fiveMultiplies += i;
            sum += i;
            fiveLength -= 1;
            if (fiveLength !== 0) {
                fiveMultiplies += ", ";
            }
        }
        else if (i % 3 === 0) {
            threeMultiplies += i;
            sum += i;
            threeLength -= 1;
            if (threeLength !== 0) {
                threeMultiplies += ", "
            }
        }
    }
    console.log(fiveMultiplies);
    console.log(threeMultiplies);
    console.log("total sum is " + sum);
}

multiplesThreeFive(1, 10);
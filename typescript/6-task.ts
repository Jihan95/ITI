type ColorsPlusYellow = "red" | "green" | "blue" | "yellow";

let colorsWithoutYellow: Exclude<ColorsPlusYellow, "yellow"> = "red";

console.log(colorsWithoutYellow);

let colrsRB: Extract<ColorsPlusYellow, "red"|"blue"> = "blue";

console.log(colrsRB);
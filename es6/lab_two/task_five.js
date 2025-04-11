class Temperature {
    #celsius;

    constructor(celsius) {
        this.celsius = celsius;
    }

    get celsius() {
        return this.#celsius;
    } 

    set celsius(value) {
        if (value < -273.15) {
            throw new Error("invalid temperature");
        }
        this.#celsius = value;
    }
}

let t1 = new Temperature(200);

console.log(t1.celsius);

t1.celsius = 150;

console.log(t1.celsius);

t1.celsius = -275;

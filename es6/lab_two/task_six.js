class MathUtils {
    static PI = 3.14;

    static calculateCircumference(r) {
        if (typeof(r) !== 'number' || arguments.length !== 1 || r <= 0) {
            throw new Error("invalid input to static method calculateCircumference()");
        }
        return this.PI * 2 * r;
    }
}

console.log(MathUtils.calculateCircumference(5));
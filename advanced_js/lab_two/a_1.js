function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function () {
    return (this.width + this.height) * 2;
}

Rectangle.prototype.displayInfo = function () {
    return `Rectangle dimentions are ${this.width} and ${this.height},
    has area = ${this.area()} and perimeter = ${this.perimeter()}`
}

var r1 = new Rectangle(5, 2);
console.log(r1.displayInfo());
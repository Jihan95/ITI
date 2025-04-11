//Abstraction Concept at shape 
function Shape(width, height) {
    if (this.constructor === Shape) {
        throw new Error ("Shape is an abstract class can't be instantiated")
    }
    Object.defineProperties(this, {
        width: {
            value: width,
            writable: false,
            configurable: false,
            enumerable: false
        },
        height: {
            value: height,
            writable: false,
            configurable: false,
            enumerable: false
        }
    });
}


//Rectangle
function Rectangle(width, height) {
    // if(Rectangle.instance) {
    //     return Rectangle.instance;
    // }
    Shape.call(this, width, height);
    // Rectangle.instance = this;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function () {
    return (this.width + this.height) * 2;
}

Rectangle.prototype.displayInfo = function () {
    return `${this.constructor.name} dimentions are ${this.width} and ${this.height},
    has area = ${this.area()} and perimeter = ${this.perimeter()}`
}

Rectangle.prototype.toString = function () {
    return `${this.constructor.name}: width = ${this.width}, height = ${this.height}, ` +
           `area = ${this.area()}, perimeter = ${this.perimeter()}`;
};

Rectangle.prototype.valueOf = function (){
    return this.area();
}

//Square
Square.count = 0;
function Square(length) {
    // if (Square.instance) {
    //     return Square.instance;
    // }
    Rectangle.call(this, length, length);
    Square.count += 1;
    // Square.instance = this;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

try {
    var shape = new Shape(3, 4);
} catch (err) {
    console.log("Try to instansiate shape", err.message); // Should throw abstract class error
}

var rect = new Rectangle(4, 5);
console.log("Rectangle Info:", rect.displayInfo());

var sq = new Square(5);
console.log("Square Info:", sq.displayInfo());
console.log("Square Count:", Square.count);

//writable: false
rect.width = 10;
console.log("Rect width (should still be 4 not 10):", rect.width);

//configurable: false
delete rect.width;
console.log("Rect width (should still be 4):", rect.width);

//enumerable: false, width & height are disabled
for(property in rect) {
    console.log("property: ", property);
};

//test .toString
console.log(rect.toString());
console.log(sq.toString());

console.log("Test .valueOf:")
let rect2 = new Rectangle(5, 10);
console.log(rect + rect2);

// //singleton pattern test
// var sq2 = new Square(10);
// console.log(sq2 === sq); // true: Same instance as sq1
// console.log(Square.count); // 1: Only one instance of Square
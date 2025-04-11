function Vehicle(speed, color) {
    if (typeof(speed) !== 'number' || typeof(color) !== 'string') {
        throw new Error("Invalid property data type");
    }
    Object.defineProperties(this, {
        speed: {
            value: speed,
            writable: false,
            configurable: false,
            enumerable: false
        },
        color: {
            value: color,
            writable: false,
            configurable: false,
            enumerable: false
        },
        turnLeft: {
            value: function(){
                console.log("Turn Left");
            },
            writable: false,
            configurable: false,
            enumerable: false
        },
        turnRight: {
            value: function(){
                console.log("Turn Right");
            },
            writable: false,
            configurable: false,
            enumerable: false
        },
        start: {
            value: function() {
                return true;
            },
            writable: false,
            configurable: false,
            enumerable: false
        },
        stop: {
            value: function() {
                return false;
            },
            writable: false,
            configurable: false,
            enumerable: false
        },
        goBackword: {
            value: function(speed, acc) {
                console.log(`speed: ${speed}, acc: ${acc}`)
            },
            writable: false,
            configurable: false,
            enumerable: false
        },
        goForward: {
            value: function(speed, acc) {
                console.log(`speed: ${speed}, acc: ${acc}`)
            },
            writable: false,
            configurable: false,
            enumerable: false
        }
    });
}


//Bicycle
function Bicycle(speed, color) {
    Vehicle.call(this, speed, color);
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;
Bicycle.prototype.ringBell = function() {
    console.log("Ring Bell")
}

//Motor Vehicle
function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
    Vehicle.call(this, speed, color);
    if (typeof(sizeOfEngine) !== 'number' || typeof(licensePlate) !== 'string') {
        throw new Error("Invalid property data type");
    }
    Object.defineProperties(this, {
        sizeOfEngine: {
            value: sizeOfEngine,
            writable: false,
            configurable: false,
            enumerable: false
        },
        licensePlate: {
            value: licensePlate,
            writable: false,
            configurable: false,
            enumerable: false
        }
    });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle

MotorVehicle.prototype.getSizeOfEngine = function (){
    console.log(this.sizeOfEngine);
}

MotorVehicle.prototype.getLicensePlate = function () {
    console.log(this.licensePlate);
}

//DumpTruck
function DumpTruck(speed, color, sizeOfEngine, licensePlate, loadCapacity, numOfWheels, weight) {
    if (typeof(loadCapacity) !== 'number' || typeof(numOfWheels) !== 'number' || typeof(weight) !== 'number') {
        throw new Error("Invalid property data type");
    }
    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
    Object.defineProperties(this, {
        loadCapacity: {
            value: loadCapacity,
            writable: false,
            configurable: false,
            enumerable: false
        },
        numOfWheels: {
            value:numOfWheels,
            writable: false,
            configurable: false,
            enumerable: false
        },
        weight: {
            value: weight,
            writable: false,
            configurable: false,
            enumerable: false
        }
    });
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.lowerLoad = function () {
    return;
}

DumpTruck.prototype.raiseLoad = function () {
    return;
}

//Car
function Car(speed, color, sizeOfEngine, licensePlate, numOfDoors, numOfWheels, weight) {
    if (typeof(numOfDoors) !== 'number' || typeof(numOfWheels) !== 'number' || typeof(weight) !== 'number') {
        throw new Error("Invalid property data type");
    }

    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

    Object.defineProperties(this, {
        numOfDoors: {
            value: numOfDoors,
            writable: false,
            configurable: false,
            enumerable: false
        },
        numOfWheels: {
            value: numOfWheels,
            writable: false,
            configurable: false,
            enumerable: false
        },
        weight: {
            value: weight,
            writable: false,
            configurable: false,
            enumerable: false
        }
    });
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car

Car.prototype.switchOnAirConditioning = function() {
    return;
}

Car.prototype.getNumOfDoors = function() {
    return this.numOfDoors;
}

let v1 = new Vehicle(50, "red");
console.log(v1);

let b1 = new Bicycle(10, "blue",);
console.log(b1);

let motor = new MotorVehicle(60, "black", 3, "1234");
console.log(motor);

let dump = new DumpTruck(70, "yellow", 10, "456", 60, 12, 1600);
console.log(dump);

let car = new Car(50, "white", 5, "246", 4, 4, 160);
console.log(car);
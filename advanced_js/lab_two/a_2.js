function List(start, stop, step=1) {
    let _list = [];
    function fillList(start, stop, step=1) {
        _list = [];
        if (step === 0) return;
        if (step > 0) {
            for (let i = start; i < stop; i += step) {
              _list.push(i);
            }
          } else {
            for (let i = start; i > stop; i += step) {
              _list.push(i);
            }
          }
    }

    fillList(start, stop, step);

    this.getList = function() {
        return _list;
    }

    this.setList = function(start, stop, step=1) {
        fillList(start, stop, step)
    }
}

List.prototype.append = function(value) {
    if (arguments.length !== 1) {
        throw new Error("append takes one argument");
    }
    
    const list = this.getList();

    if (list.length < 2) {
        throw new Error("Not enough elements to determine step");
    }

    const step = list[1] - list[0];
    const lastValue = list[list.length - 1];
    const expectedNext = lastValue + step;

    if (value === expectedNext) {
        this.setList(list[0], value + step, step);
    } else {
        throw new Error(`Invalid value to append: expected ${expectedNext}`);
    }
}

List.prototype.prepend = function (value) {
    if (arguments.length !== 1) {
        throw new Error("prepend takes one argument");
    }
    
    const list = this.getList();

    if (list.length < 2) {
        throw new Error("Not enough elements to determine step");
    }

    const step = list[1] - list[0];
    const firstValue = list[0];
    const expectedPrevious = firstValue - step;

    if (value === expectedPrevious) {
        this.setList(value, list[list.length - 1] + step, step);
    } else {
        throw new Error(`Invalid value to prepend: expected ${expectedPrevious}`);
    }
}

List.prototype.dequeue = function () {
    if (arguments.length > 0) {
        throw new Error("dequeue has no argument");
    }
    
    const list = this.getList();

    if (list.length == 0) {
        throw new Error("List is Empty");
    }

    if (list.length < 2) {
        throw new Error("Not enough elements to determine step");
    }

    const step = list[1] - list[0];
    this.setList(list[1], list[list.length - 1] + step, step);
}

List.prototype.pop = function () {
    if (arguments.length > 0) {
        throw new Error("pop has no argument");
    }
    
    const list = this.getList();

    if (list.length == 0) {
        throw new Error("List is Empty");
    }

    if (list.length < 2) {
        throw new Error("Not enough elements to determine step");
    }

    const step = list[1] - list[0];
    this.setList(list[0], list[list.length - 1], step);
}

List.prototype.display = function() {
    console.log(this.getList());
}

const myList = new List(1, 10, 2);
console.log(myList.getList());
// myList.setList(5, -5, -3);
// console.log(myList.getList());

// const myList1 = new List(1, 10, 2);   
// console.log(myList1.getList());      // [1, 3, 5, 7, 9]

// myList1.append(11);                  
// console.log(myList1.getList());      // [1, 3, 5, 7, 9, 11]

// myList1.append(13);                  // [1, 3, 5, 7, 9, 11, 13]
// console.log(myList1.getList()); 

// myList1.prepend(-1);
// console.log(myList1.getList());

myList.dequeue();
console.log(myList.getList());
myList.pop();
console.log(myList.getList());


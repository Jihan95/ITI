var linkedListObject = {
    data: [],

    popVal: function() {
        if(arguments.length !== 0) {
            throw new Error("popVal doesn't take any arguments")
        }
        if (this.data.length === 0) {
            throw new Error("the array is empty")
        }
        return this.data.pop();
    },

    pushVal: function (value) {
        if (arguments.length !== 1) {
            throw new Error("pushVal only takes one argument");
        }
    
        if (this.data.length !== 0) {
            let lastVal = this.data[this.data.length - 1].val;
            if (value > lastVal) {
                this.data.push({ val: value });
            } else {
                throw new Error("value couldn't be pushed");
            }
        } else {
            this.data.push({ val: value });
        }
    },

    removeVal: function (value) {
        if(arguments.length !== 1) {
            throw new Error("removeVal only takes one argument")
        }
        if (this.data.length !== 0) {
            let i;
            for ( i = 0; i < this.data.length; i++) {
                if (this.data[i].val === value) {
                    this.data.splice(i, 1);
                    return;
                }
            }
            if ( i === this.data.length) {
                throw new Error("Value not found");
            }
        }
        else {
            throw new Error("List is empty");
        }
    },

    enqueueVal: function (value) {
        if(arguments.length !== 1) {
            throw new Error("enqueueVal only takes one argument")
        }
        if (this.data.length !== 0) {
            let firstElem = this.data[0].val;
            if (value < firstElem) {
                this.data.unshift({ val: value });
            }
            else {
                throw new Error("Value Couldn't be inserted")
            }
        }
        else {
            this.data.unshift({ val: value });
        }
    },

    dequeueVal: function () {
        if(arguments.length !== 0) {
            throw new Error("dequeueVal doesn't take any arguments")
        }
        if (this.data.length !== 0) {
            return this.data.shift();        }
        else {
            throw new Error("List is empty");
        }

    },

    displayList: function () {
        if(arguments.length !== 0) {
            throw new Error("displayVal doesn't take any arguments")
        }
        if (this.data.length !== 0) {
            for(let i = 0; i< this.data.length; i++){
                console.log(this.data[i].val);
            }
        }
        else {
            console.log("[]");
        }

    },

    insertValAtIndex: function (index, value) {
        if (index < 0 || index > this.data.length) {
            throw new Error("Invalid index");
        }

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].val === value) {
                throw new Error("Duplicate value not allowed");
            }
        }

        if (index === 0) {
            if (this.data.length === 0 || value < this.data[0].val) {
                this.data.unshift({ val: value });
                return;
            } else {
                throw new Error("Value couldn't be inserted at beginning");
            }
        }

        if (index === this.data.length) {
            if (value > this.data[this.data.length - 1].val) {
                this.data.push({ val: value });
                return;
            } else {
                throw new Error("Value couldn't be inserted at end");
            }
        }
    
        const prev = this.data[index - 1].val;
        const next = this.data[index].val;
    
        if (value > prev && value < next) {
            for (let i = this.data.length; i > index; i--) {
                this.data[i] = this.data[i - 1];
            }
            this.data[index] = { val: value };
            return;
        } else {
            throw new Error("Value couldn't be inserted in the middle (not in order)");
        }
    }
}
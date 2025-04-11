class Employee {
    constructor(id, salary, department) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    getDetails(){
        return `
        ID: ${this.id},
        Salary: ${this.salary},
        Department: ${this.department}
        `
    }
}

class Manager extends Employee {
    constructor(id, salary, department, teamSize) {
        super(id, salary, department);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `
        ${super.getDetails()}Team size: ${this.teamSize}
        `
    }
}

let manager = new Manager(1, 5000, "Engineering", 10);

console.log(manager.getDetails());

manager.id = 5;

console.log(manager.getDetails());
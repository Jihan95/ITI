let projectID = prompt("Enter project ID: ");
let projectName = prompt("Enter project name: ");
let duration = prompt("Enter project duration: ");

const project = {
    projectID,
    projectName,
    duration,
    printData() {
        console.log(`Project ID: ${this.projectID}`);
        console.log(`Project Name: ${this.projectName}`);
        console.log(`Duration: ${this.duration}`);
    }
};

project.printData();
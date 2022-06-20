const Employee = require("./employee");

const managerQuestions = [

    {
        type: "input",
        name: "name",
        message: "What\'s the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What\'s the manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What\'s the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
];

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
};

module.exports = { Manager, managerQuestions };
const Employee = require("./employee");

//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const internQuestions = [

    {
        type: "input",
        name: "name",
        message: "What\'s the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What\'s the intern's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What\'s the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school did the intern attend?"
    }
];

//intern is a subclass 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
};

module.exports = { Intern, internQuestions };
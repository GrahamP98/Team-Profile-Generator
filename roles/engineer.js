const Employee = require("./employee");

const engineerQuestions = [

    {
        type: "input",
        name: "name",
        message: "What\'s the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What\'s the engineer's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What\'s the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What\'s the engineer's username for github?"
    }
]

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = { Engineer, engineerQuestions };
const inquirer = require("inquirer")

const employeesArr = []

// const init = ( =>)

const rolesPrompt = () => {
    inquirer.prompt([{
        type: "list",
        name: "roleSelection",
        message: "What role would you like to select?",
        choices: [
            {name: "Intern", value: "addIntern"},
            {name: "Engineer", value: "addEngineer"},
            {name: "Done", value:"done"}
        ]
    }])
    .then( answer => {

        if (answer.roleSelection === "addIntern");
        if (answer.roleSelection === "addEngineer");
        if (answer.roleSelection === "done");
    })
}
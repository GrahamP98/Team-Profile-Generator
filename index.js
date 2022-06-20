const inquirer = require("inquirer");
const template = require("./template/template");
const file = require("./template/file");

const { Engineer, engineerQuestions } = require("./roles/engineer");
const { Manager, managerQuestions } = require("./roles/manager");
const { Intern, internQuestions } = require("./roles/intern");


const employeeArr = []

const init = () => { managerQ() }

const managerQ = () => {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employeeArr.push(answers);
            return rolesPrompt();
        })
}
const engineerQ = () => {
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employeeArr.push(answers);
            return rolesPrompt();
        })
}
const internQ = () => {
    inquirer.prompt(internQuestions)
        .then((answers) => {
            answers = new Intern(answers.name, answers.id, answers.email, answers.school)
            employeeArr.push(answers);
            return rolesPrompt();
        })
}
const rolesPrompt = () => {
    inquirer.prompt([{
        type: "list",
        name: "roleSelection",
        message: "What role would you like to select?",
        choices: [
            { name: "Intern", value: "addIntern" },
            { name: "Engineer", value: "addEngineer" },
            { name: "Done", value: "done" }
        ]
    }])
        .then(answer => {

            if (answer.roleSelection === "addIntern") { internQ(); };
            if (answer.roleSelection === "addEngineer") { engineerQ(); };
            if (answer.roleSelection === "done") {
                let page = template(employeeArr)
                console.log("...");
                file(page);
            }
        })
}

init();
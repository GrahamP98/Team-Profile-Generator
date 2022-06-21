// template for manager
const manager = managerData => {
    return `
        <section id="${managerData.getRole()}" class="card d-inline-block">
            <div class="card-body bg-primary border border-info rounded-1">
                <div class="bg-primary text-white">
                    <h2 class="card-title">${managerData.getName()}</h2>
                    <h5 class="card-subtitle text-decoration-underline">🧑‍💼${managerData.getRole()}</h5>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${managerData.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}" class="card-link">${managerData.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${managerData.getofficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </section>
`
};

// template for engineer
const engineer = engineerData => {
    return `
        <section id="${engineerData.getRole()}" class="card d-inline-block">
            <div class="card-body bg-primary border border-info rounded-1">
                <div class="bg-primary text-white">
                    <h2 class="card-title">${engineerData.getName()}</h2>
                    <h5 class="card-subtitle text-decoration-underline">🧑‍🔧${engineerData.getRole()}</h5>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineerData.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}" class="card-link">${engineerData.getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank" rel="noopener noreferrer" class="card-link">www.github.com/${engineerData.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </section>
`
};

// template for intern
const intern = internData => {
    return `
        <section id="${internData.getRole()}" class="card d-inline-block">
            <div class="card-body bg-primary border border-info rounded-1">
                <div class="bg-primary text-white">
                    <h2 class="card-title">${internData.getName()}</h2>
                    <h5 class="card-subtitle text-decoration-underline">🧑‍🎓${internData.getRole()}</h5>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${internData.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}" class="card-link">${internData.getEmail()}</a></li>
                        <li class="list-group-item">School: ${internData.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </section>
`
};

// generates a card for each member created and combines them.
const employeeTemp = employeeArr => {
    let employeeHTML = ''

    for (i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].getRole() === "Manager") {
            employeeHTML = employeeHTML + manager(employeeArr[i])
        }
        if (employeeArr[i].getRole() === "Intern") {
            employeeHTML = employeeHTML + intern(employeeArr[i])
        }
        if (employeeArr[i].getRole() === "Engineer") {
            employeeHTML = employeeHTML + engineer(employeeArr[i])
        }
    } return employeeHTML
};

// template for HTML
const template = data => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/css/style.css"><source src="../template.js" type="html-template">
</head>

<body>
    <header class="bg-danger">
        <div>
            <h1 class="text-center text-white">My Team</h1>
        </div>
    </header>
    <main class="d-flex justify-content-center flex-wrap align-content-center ml-6 mr-6 p-3">
        ${employeeTemp(data)}
    </main>
</body>

</html>
`
};


module.exports = template;


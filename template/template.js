// template for manager
const manager = managerData => {
return `
<section id="${managerData.getRole()}-card">
    <div>
        <h2>${managerData.getName()}</h2>
        <h3>${managerData.getRole()}</h3>
    </div>
    <div>
        <ul>
            <li>ID: ${managerData.getId()}</li>
            <li>Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
            <li>Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
    </div>
</section>
`
};

// template for engineer
const engineer = engineerData => {
return `
<section id="${engineerData.getRole()}-card">
    <div>
        <h2>${engineerData.getName()}</h2>
        <h3>${engineerData.getRole()}</h3>
    </div>
    <div>
        <ul>
            <li>ID: ${engineerData.getId()}</li>
            <li>Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
            <li>Github: <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank" rel="noopener noreferrer">www.github.com/${engineerData.getGithub()}</a></li>
        </ul>
    </div>
</section>
`
};

// template for intern
const intern = internData => {
return `
<section id="${internData.getRole()}-card">
    <div>
        <h2>${internData.getName()}</h2>
        <h3>${internData.getRole()}</h3>
    </div>
    <div>
        <ul>
            <li>ID: ${internData.getId()}</li>
            <li>Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
            <li>School: ${internData.getSchool()}</li>
        </ul>
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="html-template" href="../assets/css/style.css" src="./template.js">
</head>

<body>
    <header>
        <div>
            <h1>Team Generated</h1>
        </div>
    </header>
    <main>
        ${employeeTemp(data)}
    </main>
</body>

</html>
`
};


module.exports = template;


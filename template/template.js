// 
const manager = managerData => {
return `
    
`
}
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
}

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
}

module.exports = template;


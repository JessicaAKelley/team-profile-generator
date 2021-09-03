const template = (employees) => {
    let html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <title>My Team</title>
</head>

<body style="font-family: Georgia, 'Times New Roman', Times, serif">
    <header class>
        <h1 class="w-100 bg-dark p-5 text-center text-white"><strong>My Team</strong></h1>
    </header>
    <main class="container d-flex flex-row flex-wrap justify-content-evenly">
`;

employees.forEach((employee) => {
    switch (employee.getRole()) {
        case "Manager":
        html += manager(employee);
        break;

        case "Engineer":
        html += engineer(employee);
        break;

        case "Intern":
        html += intern(employee);
        break;
    }
});

    html += `
        </main>
    </body>
</html>
`;
    return html;
};

const manager = (data) => {
    return `
    <div class="card my-3" style="width: 30%">
        <div class="card-body bg-dark">
            <h5 class="card-title text-light text-center"><strong>${data.getName()}</strong></h5>
            <h6 class="card-subtitle mb-2 text-light text-center"><i class="far fa-circle px-1"></i>${data.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${data.getEmail()}">${data.getEmail()}</a> </li>
                <li class="list-group-item">Office Number: ${data.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
};

const engineer = (data) => {
    return `
    <div class="card my-3" style="width: 30%">
        <div class="card-body bg-dark">
            <h5 class="card-title text-light text-center"><strong>${data.getName()}</strong></h5>
            <h6 class="card-subtitle mb-2 text-light text-center"><i class="far fa-circle px-1"></i>${data.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${data.getEmail()}">${data.getEmail()}</a> </li>
                <li class="list-group-item">GitHub: <a href = "https://github.com/${data.getGithub()}">${data.getGithub()}</a> </li>
            </ul>
        </div>
    </div>
    `;
};

const intern = (data) => {
    return `
    <div class="card my-3" style="width: 30%">
    <div class="card-body bg-dark">
            <h5 class="card-title text-light text-center"><strong>${data.getName()}</strong></h5>
            <h6 class="card-subtitle mb-2 text-light text-center"><i class="far fa-circle px-1"></i>${data.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${data.getEmail()}">${data.getEmail()}</a> </li>
                <li class="list-group-item">School/University: ${data.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
};

module.exports = template;
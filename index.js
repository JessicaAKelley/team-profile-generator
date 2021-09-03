const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/template");
const employees = [];

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter Manager's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Manager's ID: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter Manager's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Manager's email address: ",
        validate: (emailInput) => {
          const check = emailInput.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
          if (check) {
            return true;
          } else {
            console.log("\nPlease enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Please enter Manager's office number: ",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter Manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((manager) => {
      const boss = new Manager(
        manager.name,
        manager.id,
        manager.email,
        manager.office
      );
      employees.push(boss);
      continueOrNot();
    });
};

const continueOrNot = () => {
  // Prompt for user to add more employees
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "Would you like to add more employees?",
      choices: ["Yes", "No"],
    })
    .then((res) => {
      switch (res.choice) {
        case "Yes":
          employeeType();
          break;
        case "No":
          buildTeam();
          break;
        default:
          console.log("Sorry, an error has occurred.");
      }
    });
};

const employeeType = () => {
  // Prompt for employee role designation
  inquirer
    .prompt({
      type: "list",
      name: "type",
      message: "What employee role would you like to add?",
      choices: ["Engineer", "Intern"],
    })
    .then((res) => {
      switch (res.type) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          console.log("Sorry, an error has occurred.");
      }
    });
};

const createEngineer = () => {
  // Engineer prompts
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter Engineer's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Engineer's ID: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter Engineer's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Engineer's email address: ",
        validate: (emailInput) => {
          const check = emailInput.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
          if (check) {
            return true;
          } else {
            console.log("\nPlease enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter GitHub username: ",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter GitHub username!");
            return false;
          }
        },
      },
    ])
    .then((engineer) => {
      const worker = new Engineer(
        engineer.name,
        engineer.id,
        engineer.email,
        engineer.github
      );
      employees.push(worker);
      continueOrNot();
    });
};

const createIntern = () => {
  // Intern prompts
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter Intern's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Intern's ID: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter Intern's id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Intern's email address: ",
        validate: (emailInput) => {
          const check = emailInput.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
          if (check) {
            return true;
          } else {
            console.log("\nPlease enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter school/university name: ",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter school/university name!");
            return false;
          }
        },
      },
    ])
    .then((intern) => {
      const worker = new Intern(
        intern.name,
        intern.id,
        intern.email,
        intern.school
      );
      employees.push(worker);
      continueOrNot();
    });
};

createManager();
const buildTeam = () => {
  const html = generateHTML(employees);
  writeHtml(html);
};

const writeHtml = (html) => {
  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) throw err;
    console.log("Success! You have created your team!");
  });
};

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");

const mangerquestions = () => {
  inquirer //general prompt
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?:",
        name: "email",
      },
      {
        type: "input",
        message: "What is your user office Number?",
        name: "officeNum",
      },
    ])
    .then((response) => (response.confirm === response.password ? console.log("Success!") : console.log("You forgot your password already?!")));
};

const internQuestions = () => {
  inquirer //general prompt
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?:",
        name: "email",
      },
      {
        type: "input",
        message: "What is your user school?",
        name: "school",
      },
    ])
    .then((response) => (response.confirm === response.password ? console.log("Success!") : console.log("You forgot your password already?!")));
};

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");

const mangerquestions = () => {
  inquirer //general prompt
    .prompt([
      {
        type: "input",
        message: "What is your managers name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your managers email address?:",
        name: "email",
      },
      {
        type: "input",
        message: "What is your managers office Number?",
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
        message: "What is your name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your id number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?:",
        name: "email",
      },
      {
        type: "input",
        message: "What is the name of your school?",
        name: "school",
      },
    ])
    .then((response) => (response.confirm === response.password ? console.log("Success!") : console.log("You forgot your password already?!")));
};

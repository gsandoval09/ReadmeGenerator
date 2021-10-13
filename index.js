const inquirer = require("inquirer");

// TODO: Include packages needed for this application
    const fs = require("fs")
    const markdown = require("./generateMarkdown")
    const path = require("path")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message: "What is your email?",
        name: "email",
    },
    
    {
        type: "list",
        message: "What kind of of license does your project have?",
        name: "license",
        choices: ["ABCDE"],
    },

    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },

    {
        type: "input",
        message: "what is the title of your project?",
        name: "project",

    },

    {
        type: "input",
        message: "Enter project description",
        name: "description",
    },

    {
        type: "input",
        message: "installation intructions",
        name: "instructions",
    }, 



];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join (process.cwd (),fileName),data
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => {
        writeToFile("Readme.md",markdown(answers))
    })
}

// Function call to initialize app
init();

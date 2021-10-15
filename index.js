const inquirer = require("inquirer");

// TODO: Include packages needed for this application
    const fs = require("fs")
    const markdown = require("./generateMarkdown")
    const path = require("path")
// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([    

    {
        type: "input",
        message: "What is the name of your project?",
        name: "project",
    },
    
    {
        type: "input",
        message: "Enter project description",
        name: "description",
    },
    
    {
        type: "input",
        message: "Installation instructions",
        name: "install",
    },
    
    {
        type:"input",
        message: "Enter usage information",
        name: "usage",
    },
    
    {
        type: "input",
        message: "Enter any contributors",
        name: "contributors",
    },
    
    {
        type: "input",
        message: "Enter any test instructions",
        name: "test",
    },
    
    {
        type:"input",
        message: "What is your email?",
        name: "email",
    },
    
    {
        type: "list",
        message: "What kind of of license does your project have?",
        name: "license",
        choices: ["MIT", "Mozilla", "WTFPL", "GNU","Open"],
    },

    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    ])
    .then((response) =>{
    console.log("Your README was created! Good job!!")
    writeToFile("Readme.md",markdown(response))
});

}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join (process.cwd (),fileName),data
    )
}

// TODO: Create a function to initialize app
// .then((response) =>{
//     console.log("Your README was created! Good job!!")
//     return fs.writeFileSync(path.join(process.cwd(), "./output/README.md"), markdown(response))
// });

// }

// init()




// function init() {
//     inquirer.prompt(questions)
//     .then (answers => {
//         writeToFile("Readme.md",markdown(answers))
//     })
// }

// Function call to initialize app
promptUser();

// Packages needed for this application to work
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions for user input using inquirer npm package
const questions = [
    {   type: "input",
        name: "title",
        message: "What is the title of your project?"
        
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project."
    },
    {   
        type: "input",
        name: "installation",
        message: "Please describe how to install your project."
    },
    {
        type: "input",
        name: "usageInstructions",
        message: "Please enter instructions on how to use your project."
    },
    {   
        type: "input",
        name: "contributions",
        message: "Please explain how to contribute to your project."
    },
    {
        type: "input",
        name: "testing",
        message: "Please describe how to test your project."
    },
    {
        type: "list",
        name: "license",
        message: "Please select your licensing from the following",
        choices: ["Apache License 2.0", "BSD 3-Clause New or Revised license",
            "GNU General Public License (GPL)",
            "GNU Library or 'Lesser' General Public License (LGPL)",
            "MIT license",
            "Mozilla Public License 2.0",
            "Common Development and Distribution License",
            "Eclipse Public License version 2.0]"]
    },
    {
        type: "input",
        name: "username",
        message: "please enter your name."
    },
    {   
        type: "input",
        name: "githubUser",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your professional email address."
    }
];


// Function that will write the readme file using fs 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Readme file was created successfully.");
    });
};

// Function that initializes the inquirer prompt 
//and feeds the responses into the generate markdown function
function init() {
    inquirer.prompt(questions)
    .then (answers => generateMarkdown(answers))
    .then( readme => {
        console.log(readme);
        writeToFile('./dist/ReadMe.md', readme, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Readme created by you the user.");
        })
    }).catch( err => console.log(err));  
};

//Function call to initialize the application and call the prompts
init();
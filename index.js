// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')



// TODO: Create an array of questions for user input
const questions = [
inquirer.prompt([
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
        name: "usage instructions",
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
        choices: ["1", "2", "3", "4"]
    },
    {   
        type: "input",
        name: "github user",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your professional email address."
    }
]) ];;

// // TODO: Create a function to write README file
// function writeToFile (fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("readme created!");

//     })

// // }

// // // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then ( response => {
//     writeToFile('./dist/readme.md', readme, err => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Readme file was written!");
//     }  )
//     console.log("test")
// })
// }

// // // Function call to initialize app
// init();


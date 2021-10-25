// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (!license || ) {
//     return "";
//   }}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}
//   if (!license) { 
//     return "";
//   }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
//   if (!license) {
//     return "";
//   }

// Function to generate markdown for README
//utilizing a template literal and MarkDown syntax
function generateMarkdown(data) {
  return `# Title: ${data.title}

  # Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)
      - Github username
      - Professional email
  
  ## Description
  * A description of the application:
  - ${data.description}
  ## Installation
  * Instructions to install application:  
  - ${data.installation}
  ## Usage
  * Instructions on how to use application: 
  - ${data.usage}
  ## Contributions
  * How to contribute to this project: 
  - ${data.contributions}
  ## Testing
  * Instructions for testing this project: 
  - ${data.testing}
  ## License
  * The license for this project is: 
  - ${data.license}
  ## Questions
  If you have questions about this project or about software in general, please contact me.
  My name is:
  ${data.username}.
  - Github Username:
  ${data.githubUser}
  - Professional email:
  ${data.email}

`;
}

//export the function for use in the index.js file
module.exports = generateMarkdown; 

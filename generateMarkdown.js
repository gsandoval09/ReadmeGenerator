// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="Open"){
    return ("") 
  }
  else {
    return `https://img.shields.io/badge/license-${license}-blue.svg`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="Open"){
    return ("")
  }
  else {
    return `* [License](#License)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="Open"){
    return ("")
  }
  else {
    return `### License
    ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.project} 
${renderLicenseBadge(data.license)}
# Table of Contents
* [Description](#Description)
* [Installation](#Install)
* [Usage](#Usage)
* [Contributors](#Contributor)
* [Test](#Test)
* [Github](#Github)
* [Email](#Email)
${renderLicenseLink(data.license)}

# Description
${data.description}

## Install
${data.install}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Test
${data.test}

${renderLicenseSection(data.license)}


## Github
[${data.github}](https://github.com/${data.github})

## Email
${data.email}







`;
}

module.exports = generateMarkdown;

const inquirer = require('inquirer');
const fs = require('fs');
const rMe = require('./code')

// inquirer prompts within terminal
inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would your project be described?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please state which languages are utilized for this program.',
        name: 'language',
    },
    {
        type: 'input',
        message: 'How would a user install your program?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Which license will be applied to your project and what content would you like to enter?',
        name: 'license',
    },
    {
        type: 'rawlist',
        message: 'Choose your license badge',
        choices:['MIT', 'Apache_2.0', 'BSD_2--Clause', 'BSD_3--Clause'],
        name: 'badge',
    },
    {
        type: 'rawlist',
        message: 'Choose your badge color',
        choices: ['grey', 'orange', 'blue', 'green', 'red',],
        name: 'color',
    },
    {
        type: 'input',
        message: 'How will your program be utilized?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please name/list contributor(s):',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide the project gitHub repository link:',
        name: 'repo',
    },
    {
        name: 'input',
        message: 'Please provide the deployed application link:',
        name: 'app'
    },
    {
        name: 'input',
        message: 'Please provide your gitHub user name:',
        name: 'authorName',
    },
    {
        name: 'input',
        message: 'Please provide your contact email address:',
        name: 'email',
    },
    {
        name: 'input',
        message: 'Please enter your contact preference for prospective contributors:',
        name: 'prospect',
    },
])

// write to program post user entry via inquirer prompts
.then((response) => {
    fs.writeFile('README-Generator.md', rMe(response), (err) => {
        err ? console.log(err) : console.log('Created!')
    });
});
const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Roster {

  constructor() {
    this.employeeList=[];
  }

  initRoster() {
    return inquirer
      .prompt({
        type: 'list',
        name: 'continue',
        message: 'Would you like to add an Employee to your roster?',
        choices: ['Yes', "I'm done"]
      })
      .then((answers) => {
        if (answers.continue === 'Yes') {
          this.newEmployee = this.addEmployee();
        } else {
          console.log('genRoster()');
          this.employeeList = [];
        }  
      })   
  }

  addEmployee() {
    this.employee = [];

    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the employee's name?",
        name: 'name'
      },
      {
        type: 'list',
        message: "What is the employee's title?",
        name: 'title',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
      {
        type: 'number',
        message: "What is the employee's ID?",
        name: 'id'
      },
      {
        type: 'input',
        message: "What is the employee's Email?",
        name: 'email'
      },
      {
        type: 'input',
        message: "What is the employee's Github?",
        name: 'special',
        when: (answers) => answers.title == 'Engineer'
      },
      {
        type: 'input',
        message: "What school is the employee attending?",
        name: 'special',
        when: (answers) => answers.title == 'Intern'
      },
      {
        type: 'number',
        message: "What is the employee's office number?",
        name: 'special',
        when: (answers) => answers.title == 'Manager'
      }
    ])
    .then ((answers) => {
      this.employee = new Employee (answers.name, answers.title, answers.id, answers.email, answers.special);

      this.employeeList.push(this.employee);

      console.log(this.employeeList);

      this.initRoster();
    });
  }
}

module.exports = Roster;
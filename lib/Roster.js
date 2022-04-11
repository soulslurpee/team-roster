const Employee = require('./Employee.js');
const Manager = require('./Manager.js');
const Intern = require('./Intern.js');
const Engineer = require('./Engineer.js');
const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');

class Roster {

  constructor() {
    this.manager = []
    this.engineers = []
    this.interns = []
    this.roster = []
  }

  initRoster() {
    this.getManager();
  }

  getManager() {
    return inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name'
      },
      {
        type: 'number',
        message: "What is the manager's employee ID?",
        name: 'id'
      },
      {
        type: 'input',
        message: "What is the manager's Email?",
        name: 'email'
      },
      {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'special'
      }
    ])
    .then ((answers) => {
      this.manager = new Manager (answers.name, answers.id, answers.email, answers.special);
      this.getEmployee();
    });
  }

  getEmployee() {
    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'continue',
        message: 'Add another team member?',
        choices: ['Add Team Member', 'Finish Roster']
      }
  ])
    .then((answers) => {
      if (answers.continue === 'Finish Roster') {
        this.roster = [this.manager, this.engineers, this.interns]
        console.log(this.roster)
        return;
      } else {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'engorint',
              message: 'Would you like to add an Engineer or Intern?',
              choices: ['Engineer', 'Intern'],
            }
          ])
          .then((answers) => {
            if (answers.engorint === 'Engineer') {
              this.getEngineer();
            } else {
              this.getIntern();
            }
          })
      }
    })
  }

  getEngineer(){
    return inquirer
      .prompt([
        {
          type: 'input',
          message: "What is the engineer's name?",
          name: 'name'
        },
        {
          type: 'number',
          message: "What is the engineer's employee ID?",
          name: 'id'
        },
        {
          type: 'input',
          message: "What is the engineers's Email?",
          name: 'email'
        },
        {
          type: 'input',
          message: "What is the engineers's GitHub username?",
          name: 'special'
        }
      ])
      .then ((answers) => {
        this.engineer = new Engineer (answers.name, answers.id, answers.email, answers.special);
        this.engineers.push(this.engineer);
        this.getEmployee()
      });
  }

  getIntern(){
    return inquirer
      .prompt([
        {
          type: 'input',
          message: "What is the intern's name?",
          name: 'name'
        },
        {
          type: 'number',
          message: "What is the intern's employee ID?",
          name: 'id'
        },
        {
          type: 'input',
          message: "What is the intern's Email?",
          name: 'email'
        },
        {
          type: 'input',
          message: "What school does the intern attend?",
          name: 'special'
        }
      ])
      .then ((answers) => {
        this.intern = new Intern (answers.name, answers.id, answers.email, answers.special);
        this.interns.push(this.intern);
        this.getEmployee();
      });
  }
}

module.exports = Roster;
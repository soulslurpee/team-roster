const Manager = require('./Manager.js');
const Intern = require('./Intern.js');
const Engineer = require('./Engineer.js');
const inquirer = require('inquirer');
const fs = require('fs');

class Roster {

  constructor() {
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
      this.roster.push(this.manager);
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
        console.log(this.roster);
        this.createRosterPage(this.roster);
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
        this.roster.push(this.engineer);
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
        this.roster.push(this.intern);
        this.getEmployee();
      });
  }

  createRosterPage(roster) {
    const cardInfo = roster;
    
    //html skeleton
    fs.writeFile('./dist/roster.html', 
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Roster</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
            
        <header class = "container-fluid">
          <div class = "col py-5 mt-2 bg-danger fs-1 text-white text-center"> Team Roster </div>
        </header>
      
        <body class = "container">
      
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>
      </html>`, function(err) {
        if (err) throw err;
      });
      this.createCard(cardInfo);
  }

  createCard(cardInfo) {
    const bodyEl = document.querySelector("body");
    const rowEl = document.createElement("div");
      rowEl.classList = "row";
    const cardEl = document.createElement("div");
      cardEl.classList = "card";
      cardEl.style = "width: 18rem;";
    const cardBodyEl = document.createElement("div");
      cardBodyEl.classList = "card-body bg-primary text-white";
    const cardTitleEl = document.createElement("h5");
      cardTitleEl.classList = "card-title";
      cardTitleEl.textContent = `${cardInfo.name}`;
    const cardTextEl = document.createElement("p");
      cardTextEl.classList = "card-text";
      cardTextEl.textContent = `${cardInfo.icon} ${cardInfo.title}`
    const listEl = document.createElement("ul")
      listEl.classList = "list-group list-group-flush"
    const listItemIDEl = document.createElement("li")
      listItemIDEl.classList = "list-group-item"
      listItemIDEl.textContent = `ID: ${cardInfo.id}`
    const listItemEmailEl = document.createElement("li")
      listItemEmailEl.classList = "list-group-item"
      listItemEmailEl.textContent = `Email: ${cardInfo.email}`
    const listItemSpecEl = document.createElement("li")
      listItemSpecEl.classList = "list-group-item"
      listItemSpecEl.textContent = `Special: ${cardInfo.email}`

    cardInfo.forEach(function () {
      bodyEl.appendChild(rowEl);
        rowEl.appendChild(cardEl);
          cardEl.appendChild(cardBodyEl);
            cardBodyEl.appendChild(cardTitleEl);
            cardBodyEl.appendChild(cardTextEl);
          cardEl.appendChild(listEl);
            listEl.appendChild(listItemIDEl);
            listEl.appendChild(listItemEmailEl);
            listEl.appendChild(listItemSpecEl);
    })

  }
}

module.exports = Roster;
const Employee = require('./Employee');

class Intern extends Employee{
  constructor(name, id, email, special) {
    super(name, id, email, special);

    this.title = 'Intern'
    this.icon = `<img src = "./src/graduate.png">`
  }
}

module.exports = Intern
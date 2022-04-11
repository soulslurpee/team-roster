const Employee = require('./Employee');

class Engineer extends Employee{
  constructor(name, id, email, special) {
    super(name, id, email, special);

    this.title = 'Engineer'
    this.icon = `<img src = "./src/glasses.png">`
  }
}

module.exports = Engineer
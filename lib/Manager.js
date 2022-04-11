const Employee = require('./Employee');

class Manager extends Employee{
  constructor(name, id, email, special) {
    super(name, id, email, special);

    this.title = 'Manager'
    this.icon = `<img src = "./src/coffee.png">`
  }
}

module.exports = Manager
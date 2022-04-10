const Employee = require('../lib/Employee.js');

class Intern extends Employee {
  constructor(name = '', title = '', email = '') {
    super(name, title, email);

    this.school = 'reply';
  };
}

module.exports = Intern;
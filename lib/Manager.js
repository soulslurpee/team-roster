const Employee = require('../lib/Employee.js');

class Manager extends Employee {
  constructor(name = '', title = '', email = '') {
    super(name, title, email);

    this.office = 'reply';
  };
}

module.exports = Manager;
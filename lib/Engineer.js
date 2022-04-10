const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
  constructor(name = '', title = '', email = '') {
    super(name, title, email);

    this.github = 'reply';
    
  };

}

module.exports = Engineer;
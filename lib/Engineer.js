const Employee = require('../lib/Employee.js');

class Engineer {
  constructor(name, id, title, email, special) {

    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.special = special;
  };
}

module.exports = Engineer;
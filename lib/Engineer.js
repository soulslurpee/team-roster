const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
  constructor(name, id, title, email, special) {
    super(name, id, title, email);

    this.special = special;
  };

  getBio() {
    return {
      name: this.name,
      id: this.id,
      title: this.title,
      email: this.email,
      special: this.special
    };
  };
}

module.exports = Engineer;
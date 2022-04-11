const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email, special) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.special = special;
  }

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

module.exports = Employee;
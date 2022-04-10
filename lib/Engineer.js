const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
  constructor(name, id, title, email, special) {
    super(name, id, title, email);

    this.special = special;
  };

  addGithub() {
    const bio = this.getBio;

    this.bio.push({github: this.github});

    console.log(bio)

  }

}

module.exports = Engineer;
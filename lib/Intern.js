const Employee = require('../lib/Employee.js');

class Intern {
  constructor(name, id, title, email, special) {

    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
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
};

module.exports = Intern;
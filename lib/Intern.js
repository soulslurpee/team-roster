const Employee = require('../lib/Employee.js');

class Intern extends Employee {
  constructor(name, id, title, email, special) {
    super(name, id, title, email);

    this.school = special;
  };

  getSchool() {
    return {
      school: this.school
    };
  };
};

module.exports = Intern;
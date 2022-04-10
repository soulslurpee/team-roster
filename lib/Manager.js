const Employee = require('../lib/Employee.js');

class Manager extends Employee {
  constructor(name, id, title, email, special) {
    super(name, id, title, email);

    this.office = special;
  };

  getOffice() {
    return {
      office: this.office
    };
  };
};

module.exports = Manager;
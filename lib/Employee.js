class Employee {
  constructor(name, title, email) {
    this.name = name;
    this.title = title;
    this.email = email;
  }

  getBio() {
    inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
      },
      {
        type: 'input',
        name: 'title',
        message: "What is the employee's title?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?"
      })
      .then(({ name }) => {
        this.name = name;
      })
      .then(({ title }) => {
        this.title = title;
      })
      .then(({ email }) => {
        this.email = email;
      })
  }
};

module.exports = Employee;
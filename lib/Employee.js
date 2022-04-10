class Employee {
  constructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }

  getBio() {
    return {
      name: this.name,
      id: this.id,
      title: this.title,
      email: this.email,
    };
  };
}

module.exports = Employee;
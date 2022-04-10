const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Dave', '2', 'employee', 'dave@company.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe('2');
  expect(employee.title).toBe('employee');
  expect(employee.email).toBe('dave@company.com');
});

test('creates bio array object', () => {

  const employee = new Employee('Dave', '2', 'employee', 'dave@company.com', 'username');

  expect(employee.getBio()).toEqual(expect.any(Object));

  console.log(employee.getBio());
});
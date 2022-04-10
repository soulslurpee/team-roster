const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Dave', 'Engineer', 'dave@company.com');

  expect(employee.name).toBe('Dave');
  expect(employee.title).toBe('Engineer');
  expect(employee.email).toBe('dave@company.com');
});
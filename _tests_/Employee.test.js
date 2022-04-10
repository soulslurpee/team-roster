const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Dave', 'Engineer', '69', 'dave@company.com', 'GittyHubber');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe('69');
  expect(employee.title).toBe('Engineer');
  expect(employee.email).toBe('dave@company.com');
  expect(employee.special).toBe('GittyHubber');
});
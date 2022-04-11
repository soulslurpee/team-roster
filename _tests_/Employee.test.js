const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Dave', '69', 'dave@company.com', 'GittyHubber');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe('69');
  expect(employee.email).toBe('dave@company.com');
  expect(employee.special).toBe('GittyHubber');
});
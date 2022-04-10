const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');
const { TestWatcher } = require('jest');

test('checks for Engineer title', () =>{
  const engineer = new Engineer('Dave', 'Engineer', 'dave@company.com');
  expect(engineer.github);
});
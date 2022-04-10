const Intern = require('../lib/Intern.js');
const { TestWatcher } = require('jest');

test('checks for Intern title', () =>{
  const intern = new Intern('Dave', 'Intern', 'dave@company.com');
  expect(intern.school);
});
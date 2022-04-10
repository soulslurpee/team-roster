const Engineer = require('../lib/Engineer.js');
const { TestWatcher } = require('jest');

test('checks for Engineer title', () =>{
  const engineer = new Engineer('Dave', 'Engineer', 'dave@company.com');
  expect(engineer.github);
});
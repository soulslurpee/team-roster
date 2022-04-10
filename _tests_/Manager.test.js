const Manager = require('../lib/Manager.js');
const { TestWatcher } = require('jest');

test('checks for Manager title', () =>{
  const manager = new Manager('Dave', 'Manager', 'dave@company.com');
  expect(manager.office);
});
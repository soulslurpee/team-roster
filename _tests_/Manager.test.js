const Manager = require('../lib/manager.js');
const { TestWatcher } = require('jest');

test('checks for manager title', () =>{

  const manager = new Manager('Dave', '2', 'Manager', 'dave@company.com', 'office');

  expect(manager.name).toBe('Dave');
  expect(manager.id).toBe('2');
  expect(manager.title).toBe('Manager');
  expect(manager.email).toBe('dave@company.com');
  expect(manager.office).toBe('office');
});

test('creates office array object', () => {

  const manager = new Manager('Dave', '2', 'Manager', 'dave@company.com', 'office');

  expect(manager.getBio()).toEqual(expect.any(Object));

  console.log(manager.getBio());
});
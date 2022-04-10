const Engineer = require('../lib/Engineer.js');
const { TestWatcher } = require('jest');

test('checks for Engineer title', () =>{

  const engineer = new Engineer('Dave', '2', 'Engineer', 'dave@company.com', 'username');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toBe('2');
  expect(engineer.title).toBe('Engineer');
  expect(engineer.email).toBe('dave@company.com');
  expect(engineer.github).toBe('username');
});

test('adds github to bio object', () => {

  const engineer = new Engineer('Dave', '2', 'Engineer', 'dave@company.com', 'username');

  expect(engineer.bio).toBe(expect.expect.arrayContaining(Object));
});